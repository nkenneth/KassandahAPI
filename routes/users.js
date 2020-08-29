const { USER_CONSTANTS, AUTH_CONSTANTS } = require("../config/constant.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcrypt");
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
  if (req.query.mobile) criteria.mobile = req.query.mobile;
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
        mobile: 1,
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
        mobile: 1,
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
router.post("/", userAuth, async (req, res) => {
  const { error } = validateUserPost(req.body);
  if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

  var email;
  if (req.body.email) email = req.body.email.toLowerCase() || "NMB";

  let user = await User.findOne({
    $or: [{ email: email }, { mobile: req.body.mobile }],
  });

  if (user) {
    if (email === user.email)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.EMAIL_ALREADY_EXISTS });

    if (req.body.mobile === user.mobile)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.MOBILE_ALREADY_EXISTS });
  }

  user = new User(_.pick(req.body, ["role", "fullName", "mobile", "address", "stateId"]));
  user.email = req.body.email.toLowerCase();
  user.createdBy = req.jwtData.email;
  user.status = "active";

  // encrypt password
  if (req.body.password) user.password = await bcrypt.hash(req.body.password, config.get("bcryptSalt"));
  await user.save();
  user.userId = user._id;

  let response = _.pick(user, ["userId", "role", "fullName", "mobile", "email", "address", "stateId", "status"]);

  res.send({ statusCode: 200, message: "Success", data: response });

  await sendUserRegisterMail(user, req.body.password);
  // if (req.body.mobile) {
  //   let data = { email: user.email, password: req.body.password };
  //   let userRegister = formatter(config.get("smsc.userRegister"), data);
  //   console.log("otp", userRegister);
  //   const result = await sendSms(userRegister, req.body.mobile);
  //   if (config.get("sendSms") && result.code && result.code != 21408)
  //     return res.status(400).send({
  //       statusCode: 400,
  //       message: "Failure",
  //       data: "Invalid mobile number"
  //     });
  // }
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
  if (req.body.mobile && req.body.mobile != user.mobile) {
    tempUser = await User.findOne({ mobile: req.body.mobile });
    if (tempUser)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.MOBILE_ALREADY_EXISTS });
    user.mobile = req.body.mobile;
  }

  if (req.jwtData.role == "user") {
    user.status = req.body.status || user.status;
  }

  user.modifiedBy = req.jwtData.email;
  user.modifiedDate = Math.round(new Date() / 1000);
  await user.save();
  user.userId = user._id;

  let response = _.pick(user, ["userId", "fullName", "mobile", "email", "address", "status"]);

  res.send({ statusCode: 200, message: "Success", data: response });
});

//verify email or mobile
router.post("/verify", async (req, res) => {
  let criteria = {};
  let email;
  if (req.body.email) {
    email = req.body.email.toLowerCase() || "NMB";
    criteria.email = email;
  }
  if (req.body.mobile) {
    criteria.mobile = req.body.mobile;
  }
  if (req.body.email && req.body.mobile) {
    criteria = { $or: [{ email: email }, { mobile: req.body.mobile }] };
  }

  let user = await User.findOne(criteria);
  if (user) {
    if (email == user.email && req.body.mobile == user.mobile) {
      return res
        .status(400)
        .send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.MOBILE_EMAIL_ALREADY_EXISTS });
    }
    if (email === user.email)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.EMAIL_ALREADY_EXISTS });

    if (req.body.mobile === user.mobile)
      return res.status(400).send({ statusCode: 400, message: "Failure", data: USER_CONSTANTS.MOBILE_ALREADY_EXISTS });
  }
  return res.send({ statusCode: 200, message: "Success", data: USER_CONSTANTS.VERIFICATION_SUCCESS });
});

// User login api
router.post("/login", async (req, res) => {
  const { error } = validateUserLogin(req.body);
  if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

  let criteria = {};
  if (req.body.email && req.body.email != "") criteria.email = req.body.email.toLowerCase();

  let user = await User.findOne(criteria);
  if (!user) {
    return res.status(400).send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INVALID_CREDENTIALS });
  }

  if (user.status != "active")
    return res
      .status(400)
      .send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INACTIVE_ACCOUNT, status: user.status });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INVALID_CREDENTIALS });

  const token = user.generateAuthToken();
  user.accessToken = token;
  user.lastLogin = Math.round(new Date() / 1000);
  await user.save();
  user.userId = user._id;

  let roleData = await Role.findOne({ role: user.role });

  if (roleData) {
    user.permissions = roleData.permissions;
  }

  let response = _.pick(user, [
    "userId",
    "role",
    "permissions",
    "fullName",
    "mobile",
    "email",
    "status",
    "stateName",
    "stateCode",
    "stateId",
    "profilePic",
    "insertDate",
  ]);

  res.header("Authorization", token).send({ statusCode: 200, message: "Success", data: response });
});

// user password change
router.post("/changePassword", userAuth, async (req, res) => {
  const { error } = validateChangePassword(req.body);
  if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

  let user = await User.findById(req.jwtData.userId);
  if (!user) return res.status(400).send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INVALID_USER });

  const validPassword = await bcrypt.compare(req.body.oldPassword, user.password);
  if (!validPassword)
    return res.status(400).send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INVALID_PASSWORD });

  let encryptPassword = await bcrypt.hash(req.body.newPassword, config.get("bcryptSalt"));

  user.password = encryptPassword;
  await user.save();
  res.send({ statusCode: 200, message: "Success", data: AUTH_CONSTANTS.PASSWORD_CHANGE_SUCCESS });
});

router.post("/password/reset/", userAuth, async (req, res) => {
  const { error } = validateResetAdminPassword(req.body);
  if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

  let user = await User.findById(req.body.userId);
  if (!user)
    return res.status(400).send({ statusCode: 400, message: "Failure", data: AUTH_CONSTANTS.INVALID_CREDENTIALS });

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
    mobile: user.mobile,
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
