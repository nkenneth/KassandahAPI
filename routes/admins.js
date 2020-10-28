const { ADMIN_CONSTANTS, USER_CONSTANTS, AUTH_CONSTANTS, ROLE_CONSTANTS } = require("../config/constant.js");
const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const _ = require("lodash");
const { ApiLog } = require("../models/apiLog");
const { adminAuth, test } = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const response = require("../services/response");
const { User, validateUserPostByAdmin, validateChangePassword } = require("../models/user");
const { Role } = require("../models/role");
const { Token } = require("../models/emailverificationtoken.js");
const { sendUserVerificationMail, sendResetPasswordMail } = require("../services/amazonSes");
const { isEmpty } = require("lodash");





// Create a new User
router.post("/user", adminAuth, async (req, res) => {
    const { error } = validateUserPostByAdmin(req.body);
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
    const { firstName, lastName, phone, password, department, role } = req.body;
  
    console.log( { firstName, lastName, phone, password, email, department, role } );
  
    try {
  
      // get role model
      const roleModel = await Role.findById(role);
    console.log(roleModel);
      if(!roleModel) return response.error(res, ROLE_CONSTANTS.NOT_FOUND);

      //instantiate User model
      user = new User({ firstName, lastName, email, phone, password, department, roles: roleModel._id, status:"inactive" });
  
      //create salt for user password hash
      const salt = await bcrypt.genSalt(10);
  
      //hash password and replace user password with the hashed password
      user.password = await bcrypt.hash(password, salt);
  
      // save user to db
      await user.save();
  
      // Create a verification token for this user
      var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
  
      // Save the verification token
      token.save(function (err) {
          if (err) return response.error(res, err.message, 500); 
      });

    //   const queueName = "email-verification"
    //   const payload = "Welcome to GIG PAYFLOW now KASSANDAH"
      
      var host = config.get("app_domain");
      console.log(`host url is: ${host}`);
      callback_url = `${host}api/user/verify/${token.token}`;
      
      // await publishToQueue(queueName, payload);
      sendUserVerificationMail(user.email, user.firstName, callback_url);
  
      return response.success(res, USER_CONSTANTS.VERIFICATION_EMAIL_SENT);
      
    } catch (err) {
      console.error(err.message);
      return response.error(res, err.message, 500);
    }
  
  });

// admin password change
router.post("/password/change", adminAuth, async (req, res) => {
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

// attach role to a user
router.post("/user/role/attach", adminAuth, async (req, res) => {

  const { roleId, userId } = req.body;

  const role = await Role.findById(roleId);
  if(!role) return response.error(res, ROLE_CONSTANTS.NOT_FOUND);
  console.log(role);


  const user = await User.findById(userId);
  if(!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  console.log(user);

  user.roles.push(role._id);

  await user.save();

  return response.success(res); 

});

// detach role from user
router.post("/user/role/detach", adminAuth, async (req, res) => {

  const { roleId, userId } = req.body;

  const roleModel = await Role.findById(roleId);
  if(!roleModel) return response.error(res, ROLE_CONSTANTS.NOT_FOUND);
  console.log(roleModel);


  const user = await User.findById(userId);
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  
  console.log(user);
  console.log(user.roles);

  const roleIndex = user.roles.indexOf(roleId);

  if (roleIndex <= -1) return response.error(res, "User does not have role");

  user.roles.splice(roleIndex);
  console.log(user.roles);

  await user.save();

  // return response.success(res); 
  return response.withData(res, user.roles); 

});



// apilogs
router.get("/apiLogs", test("taaaa"), async (req, res) => {

    let criteria = {}
    if (req.query.partnerId) criteria = { "body.partnerId": req.query.partnerId };
    if (req.query.waybillNumber) criteria = { ...criteria, "body.waybillNumber": req.query.waybillNumber }

    let arr = []
    if (req.query.exUpdate == "yes")
        arr.push("/api/partner/location/update")

    if (req.query.exPickUpList == "yes")
        arr.push("/api/partner/pickupList")

    if (req.query.exActiveJobs == "yes")
        arr.push("/api/partner/activeJobs")

    if (arr.length)
        criteria = { ...criteria, url: { $nin: arr } }

    if (req.query.url)
        criteria = { ...criteria, url: req.query.url }

    console.log("criteria:", criteria);

    let apiList = await ApiLog.aggregate([
        { $match: criteria },
        { $sort: { insertDate: -1 } },
        { $limit: 50 },
        {
            $project: {
                _id: 0,
            }
        },
    ]);

    return res.send({ statusCode: 200, message: "Success", data: { apiList } });
});


module.exports = router;
