const { USER_CONSTANTS, AUTH_CONSTANTS } = require("../config/constant.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcrypt");
const response = require("../services/response");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const {
  User,
  UserAudit,
  validateUserPost,
  validateUserPut,
  validateUserLogin,
  validateChangePassword,
  validateResetAdminPassword,
} = require("../models/user");
const { Role } = require("../models/role");
const { sendUserRegisterMail } = require("../services/amazonSes");
//const { sendActivationMail } = require("../services/sendMail");
const { formatter } = require("../services/commonFunctions");
const { userAuth } = require("../middleware/auth");

mongoose.set("debug", true);

// Get user list
router.get("/", userAuth, async (req, res) => {
  let criteria = {};
  var skipVal, limitVal;
  if (isNaN(parseInt(req.query.offset))) skipVal = 0;
  else skipVal = parseInt(req.query.offset);

  if (isNaN(parseInt(req.query.limit))) limitVal = 500;
  else limitVal = parseInt(req.query.limit);

  if (req.query.fullName) {
    var regexName = new RegExp(req.query.fullName, "i");
    criteria.fullName = regexName;
  }
  if (req.query.email) criteria.email = req.query.email;
  if (req.query.phone) criteria.phone = req.query.phone;
  if (req.query.status) criteria.status = req.query.status;
  if (req.query.role) criteria.role = req.query.role;
  if (req.query.startDate) {
    criteria.insertDate = { $gte: parseInt(req.query.startDate) };
  }
  if (req.query.endDate) {
    criteria.insertDate = { $lte: parseInt(req.query.endDate) };
  }
  if (
    req.query.startDate != null &&
    req.query.endDate != null &&
    req.query.startDate != "" &&
    req.query.endDate != ""
  ) {
    criteria.insertDate = {
      $gte: parseInt(req.query.startDate),
      $lte: parseInt(req.query.endDate),
    };
  }

  let userList = await User.aggregate([
    { $match: criteria },
    { $sort: { insertDate: -1 } },
    { $skip: skipVal },
    { $limit: limitVal },
    { $lookup: { from: "states", localField: "stateId", foreignField: "stateId", as: "stateData" } },
    {
      $project: {
        _id: 0,
        userId: "$_id",
        role: 1,
        fullName: 1,
        email: 1,
        phone: 1,
        address: 1,
        status: 1,
        stateName: { $arrayElemAt: ["$stateData.name", 0] },
        stateCode: { $arrayElemAt: ["$stateData.code", 0] },
        stateId: 1,
        address: 1,
        createdBy: 1,
        modifiedBy: 1,
        lastLogin: 1,
        modifiedDate: 1,
        insertDate: 1,
        creationDate: 1,
      },
    },
  ]);

  res.send({ statusCode: 200, message: "Success", data: { userList } });
});

router.get("/auditLog/:userId", userAuth, async (req, res) => {
  let criteria = {};
  var skipVal, limitVal;
  if (isNaN(parseInt(req.query.offset))) skipVal = 0;
  else skipVal = parseInt(req.query.offset);

  if (isNaN(parseInt(req.query.limit))) limitVal = 100;
  else limitVal = parseInt(req.query.limit);

  criteria.userId = req.params.userId;

  let auditLog = await UserAudit.aggregate([
    { $match: criteria },
    { $sort: { modifiedDate: -1 } },
    { $skip: skipVal },
    { $limit: limitVal },
    { $lookup: { from: "states", localField: "stateId", foreignField: "stateId", as: "stateData" } },
    {
      $project: {
        _id: 0,
        userId: 1,
        role: 1,
        fullName: 1,
        email: 1,
        phone: 1,
        address: 1,
        status: 1,
        stateName: { $arrayElemAt: ["$stateData.name", 0] },
        stateCode: { $arrayElemAt: ["$stateData.code", 0] },
        stateId: 1,
        address: 1,
        createdBy: 1,
        modifiedBy: 1,
        modifiedDate: 1
      },
    },
  ]);

  res.send({ statusCode: 200, message: "Success", data: { auditLog } });
});

// Create a new User
router.post("/", async (req, res) => {
  const { error } = validateUserPost(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  let user = await User.findOne({
    $or: [{ email: req.body.email.toLowerCase() }, { phone: req.body.phone }],
  });

  if (user) {
    if (req.body.email === user.email)
      return response.error(res, USER_CONSTANTS.EMAIL_ALREADY_EXISTS, 400);

    if (req.body.phone === user.phone)
      return response.error(res, USER_CONSTANTS.PHONE_ALREADY_EXISTS, 400);
  }

  const email = req.body.email.toLowerCase();
  const { firstName, lastName, phone, password, roleId } = req.body;

  console.log( { firstName, lastName, phone, password, email, roleId } );

  try {

    //instantiate User model
    user = new User({ firstName, lastName, email, phone, password, roleId, status:"inactive" });

    //create salt for user password hash
    const salt = await bcrypt.genSalt(10);

    //hash password and replace user password with the hashed password
    user.password = await bcrypt.hash(password, salt);

    // save user to db
    await user.save();

    user.userId = user._id;
  
    let result = _.pick(user, ["userId", "roleId", "firstName", "lastName", "phone", "email", "status"]);
    
    // await sendUserVerificationEmail(user.email);

    return response.success(res, USER_CONSTANTS.VERIFICATION_EMAIL_SENT);
    
  } catch (err) {
    console.error(err.message);
    return response.error(res, err.message, 500);
  }

});

// Update existing user
router.put("/", userAuth, async (req, res) => {
  const { error } = validateUserPut(req.body);
  if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

  let user;
  if (req.jwtData.role === "user") {
    user = await User.findById(req.body.userId);
    if (!user) return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.INVALID_USER });
  } else {
    user = await User.findById(req.jwtData.userId);
    if (!user) return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.INVALID_USER });
  }

  await logCurrentUserState(user);

  user.fullName = req.body.fullName || user.fullName;
  user.address = req.body.address || user.address;
  user.role = req.body.role || user.role;
  user.stateId = req.body.stateId || user.stateId;
  if (req.body.email && req.body.email != user.email) {
    tempUser = await User.findOne({ email: req.body.email });
    if (tempUser)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.EMAIL_ALREADY_EXISTS });
    user.email = req.body.email;
  }
  if (req.body.phone && req.body.phone != user.phone) {
    tempUser = await User.findOne({ phone: req.body.phone });
    if (tempUser)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.PHONE_ALREADY_EXISTS });
    user.phone = req.body.phone;
  }

  if (req.jwtData.role == "user") {
    user.status = req.body.status || user.status;
  }

  user.modifiedBy = req.jwtData.email;
  user.modifiedDate = Math.round(new Date() / 1000);
  await user.save();
  user.userId = user._id;

  let response = _.pick(user, ["userId", "fullName", "phone", "email", "address", "status"]);

  res.send({ statusCode: 200, message: "Success", data: response });
});

//verify email or phone
router.post("/verify", async (req, res) => {
  let criteria = {};
  let email;
  if (req.body.email) {
    email = req.body.email.toLowerCase() || "NMB";
    criteria.email = email;
  }
  if (req.body.phone) {
    criteria.phone = req.body.phone;
  }
  if (req.body.email && req.body.phone) {
    criteria = { $or: [{ email: email }, { phone: req.body.phone }] };
  }

  let user = await User.findOne(criteria);
  if (user) {
    if (email == user.email && req.body.phone == user.phone) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.phone_EMAIL_ALREADY_EXISTS });
    }
    if (email === user.email)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.EMAIL_ALREADY_EXISTS });

    if (req.body.phone === user.phone)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.phone_ALREADY_EXISTS });
  }
  return res.send({ statusCode: 200, message: "Success", data: USER_CONSTANTS.VERIFICATION_SUCCESS });
});

// User login api
router.post("/login", async (req, res) => {
  const { error } = validateUserLogin(req.body);
  if (error) return response.validationErrors(res, error.details[0].message);

  let criteria = {};
  if (req.body.email && req.body.email != "") criteria.email = req.body.email.toLowerCase();

  let user = await User.findOne(criteria);
 
  if (!user) {
    return response.error(res, AUTH_CONSTANTS.INVALID_CREDENTIALS);
  }

  if (user.status != "active") return response.error(res, AUTH_CONSTANTS.INACTIVE_ACCOUNT);
    

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return response.error(res, AUTH_CONSTANTS.INVALID_CREDENTIALS);

  let roleData = await Role.findById(user.roleId);
  const role = roleData.role;

  const token = jwt.sign(
    {
        userId: user._id,
        email: user.email,
        role: role
    },
    config.get("jwtPrivateKey")
  );


  user.accessToken = token;
  user.lastLogin = new Date();
  await user.save();
  user.userId = user._id;

  

  if (roleData) {
    user.permissions = roleData.permissions;
  }

  let details = _.pick(user, [
    "userId",
    "firstName",
    "lastName",
    "phone",
    "email",
    "status",
    "profilePic",
    "lastLogin",
  ]);
  return response.withData(res, {token: token, details: details, role: role, permissions: user.permissions });
});

// user password change
router.post("/password/change", userAuth, async (req, res) => {
  const { error } = validateChangePassword(req.body);
  if (error) return response.error(res, error.details[0].message); 

  let user = await User.findById(req.jwtData.userId);
  if (!user) return response.error(res, AUTH_CONSTANTS.INVALID_USER);
  
  const { oldPassword, newPassword } = req.body;

  const validPassword = await bcrypt.compare(oldPassword, user.password);
  if (!validPassword)
    return response.error(res, AUTH_CONSTANTS.INVALID_PASSWORD);

  //create salt for user password hash
  const salt = await bcrypt.genSalt(10);

  //hash password and replace user password with the hashed password
  let encryptPassword = await bcrypt.hash(newPassword, salt);

  user.password = encryptPassword;
  await user.save();
  return response.success(res, AUTH_CONSTANTS.PASSWORD_CHANGE_SUCCESS); 

});

router.post("/password/reset/", async (req, res) => {
  const { error } = validateResetAdminPassword(req.body);
  if (error) return response.error(res, error.details[0].message); 

  let user = await User.findById(req.body.userId);
  if (!user)
    return response.error(res, AUTH_CONSTANTS.INVALID_CREDENTIALS); 

  var encryptPassword = await bcrypt.hash(req.body.newPassword, config.get("bcryptSalt"));
  user.password = encryptPassword;

  await User.updateOne({ _id: user._id }, { $set: { lastPasswords: user.lastPasswords, password: user.password } });
  res.send({ statusCode: 200, message: "Success", data: AUTH_CONSTANTS.PASSWORD_CHANGE_SUCCESS });

  // SEND EMAIL
});

async function logCurrentUserState(user) {
  let auditUser = new UserAudit({
    userId: user._id.toString(),
    role: user.role,
    fullName: user.fullName,
    phone: user.phone,
    email: user.email,
    stateId: user.stateId,
    address: user.address,
    status: user.status,
    profilePic: user.profilePic,
    createdBy: user.createdBy,
    modifiedBy: user.modifiedBy,
    modifiedDate: user.modifiedDate
  })

  await auditUser.save()
}

module.exports = router;
