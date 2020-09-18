const { ADMIN_CONSTANTS, AUTH_CONSTANTS } = require("../config/constant.js");
const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { ApiLog } = require("../models/apiLog");
const { adminAuth, test } = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const response = require("../services/response");
const { User, validateChangePassword } = require("../models/user");

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
