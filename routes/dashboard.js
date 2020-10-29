
const config = require("config");
const express = require("express");
const { adminAuth } = require("../middleware/auth");
const { User } = require("../models/user");
const response = require("../services/response");
const router = express.Router();


router.get("totalUsers",adminAuth, async, (req, res) => {
    try {
        totalUser = await User.find({ isVerified : true});
        var host = totalUser.count
        return response.withData(res, host);
    } catch (error) {
        return response.error(res, error.message);
    }
});

module.exports = router;
