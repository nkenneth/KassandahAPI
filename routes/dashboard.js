
const config = require("config");
const express = require("express");
const { adminAuth } = require("../middleware/auth");
const { User } = require("../models/user");
const response = require("../services/response");
const router = express.Router();


router.get("totalActiveUsers",adminAuth, async, (req, res) => {
    try {
        totalUser = await User.find({ isVerified : true, status: "active"});
        var total_active_users = totalUser.count
        return response.withData(res, total_active_users);
    } catch (error) {
        return response.error(res, error.message);
    }
});

router.get("totalPendingRequest", adminAuth, async (req, res) => {

});

router.get("totalUsers", adminAuth, async (req, res) =>{

});

router.get("totalDeclinedRequest", adminAuth, async (req, res) => {

});

module.exports = router;
 