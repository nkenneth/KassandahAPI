
const config = require("config");
const express = require("express");
const { adminAuth } = require("../middleware/auth");
const { Ticket } = require("../models/ticket");
const { User } = require("../models/user");
const response = require("../services/response");
const router = express.Router();


router.get("/totalActiveUsers",adminAuth, async, (req, res) => {
    try {
        totalUser = await User.find({ isVerified : true, status: "active"});
        var total_active_users = totalUser.count()
        return response.withData(res, total_active_users);
    } catch (error) {
        return response.error(res, error.message);
    }
});

router.get("/totalPendingRequests", adminAuth, async (req, res) => {
try{
    totalPendingRequest = await Ticket.find({ status: "pending"});
    var total_pending_requests =  totalPendingRequest.count();
    return response.withData(res, total_pending_requests);
} catch(error) {
    return response.error(res, error.message);
}
});

router.get("/totalUsers", adminAuth, async (req, res) =>{
try {
    totalUser = await User.find();
    var total_users = totalUsers.count();
    return response.withData(res, total_users);
} catch (error) {
    return response.error(res, error.message);
}
});

router.get("/totalDeclinedRequest", adminAuth, async (req, res) => {
    try{
        totalDeclinedRequest = await Ticket.find({ status: "rejected"});
        var total_declined_requests =  totalDeclinedRequest.count();
        return response.withData(res, total_declined_requests);
    } catch(error) {
        return response.error(res, error.message);
    }
});

module.exports = router;
 