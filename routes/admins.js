const { ADMIN_CONSTANTS } = require("../config/constant.js");
const config = require("config");
const Joi = require("joi");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { Admin, validateLogin } = require("../models/admin");
const { ApiLog } = require("../models/apiLog");
const { adminAuth, test } = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.post("/login", async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

    let email = req.body.email.toLowerCase();

    let admin = await Admin.findOne({ email: email });
    if (!admin)
        return res.status(400).send({ statusCode: 400, message: "Failure", data: ADMIN_CONSTANTS.INVALID_EMAIL });

    if (admin.status == "blocked")
        return res.status(400).send({ statusCode: 400, message: "Failure", data: ADMIN_CONSTANTS.BLOCKED_ACCOUNT });

    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if (!validPassword)
        return res.status(400).send({ statusCode: 400, message: "Failure", data: ADMIN_CONSTANTS.INVALID_EMAIL });

    const token = admin.generateAuthToken();
    admin.accessToken = token;
    admin.deviceToken = req.body.deviceToken;

    await admin.save();
    let response = _.pick(admin, ["email", "status", "createdAt", "_id"]);

    res.header("Authorization", token).send({ statusCode: 200, message: "Success", data: response });
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

    console.log("criteria:", criteria)
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

// router.get("/cleardatabase", async (req, res) => {
//     if (!req.query.otpToken)
//         return res.status(400).send({ statusCode: 400, message: "Failure", data: "otpToken is mandatory query param" });

//     let isValid = await verifyAndDeleteToken("9876543210", parseInt(req.query.otpToken), "OR");
//     if (!isValid) {
//         return res.status(400).send({ statusCode: 400, message: "Failure", data: "Invalid OTP Passed" });
//     }

    
//     await User.deleteMany({});
   

//     let userArray = [
//         { "fullName": "Anselm", "mobile": "1234567890", "email": "anselm@gigpap.com", "password": "$2b$10$oPd2gJERglqNiWXf3sYwIubzrVRrt25/wJP.wx9GEDiVAS6xDzA8y", "deviceToken": "", "version": "", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWYyMDAyM2Y0ODRmODAwMTc2OTg4MmEiLCJyb2xlIjoidXNlciIsInN1YlJvbGUiOiJOSVRUIiwiaWF0IjoxNTkyOTE4MDc2fQ.qEHIe9kQYrzDmbiS6Xs8IMfeN4pp43i1N6X_yCnfQEs", "profilePic": "", "role": "admin", "address": "nigeria", "stateId": 10, "status": "active" },
//         { "fullName": "Michael", "mobile": "1234567890", "email": "michael@gigpap.com", "password": "$2b$10$oPd2gJERglqNiWXf3sYwIubzrVRrt25/wJP.wx9GEDiVAS6xDzA8y", "deviceToken": "", "version": "", "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWYyMDAyM2Y0ODRmODAwMTc2OTg4MmEiLCJyb2xlIjoidXNlciIsInN1YlJvbGUiOiJOSVRUIiwiaWF0IjoxNTkyOTE4MDc2fQ.qEHIe9kQYrzDmbiS6Xs8IMfeN4pp43i1N6X_yCnfQEs", "profilePic": "", "role": "admin", "address": "nigeria", "stateId": 10, "status": "active" }
//     ]

//     await User.insertMany(userArray);
//     return res.send({ statusCode: 200, message: "Success", data: "DB cleaned" });
// });
module.exports = router;
