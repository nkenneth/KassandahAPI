const { DASHBOARD_CONSTANTS, USER_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Ticket } = require("../models/ticket");
const { User } = require("../models/user");
const { userAuth } = require("../middleware/auth");


// Get  total user tickets count
router.get("/ticket-count", userAuth, async (req, res) => {
    
    try {
        tickets = await Ticket.find({ user: req.jwtData.userId });
        console.log(tickets.length);
        return response.withData(res, { totalNumberOfTickets: tickets.length });
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Get  all pending user tickets count
router.get("/ticket-pending", userAuth, async (req, res) => {
    
    try {
        tickets = await Ticket.find({ user: req.jwtData.userId, status: "pending" });
        console.log(tickets.length);
        return response.withData(res, tickets.length);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Get  all approved user tickets count
router.get("/ticket-pending", userAuth, async (req, res) => {
    
    try {
        tickets = await Ticket.find({ user: req.jwtData.userId, status: "approved" });
        console.log(tickets.length);
        return response.withData(res, tickets.length);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Get  all rejected user tickets count
router.get("/ticket-pending", userAuth, async (req, res) => {
    
    try {
        tickets = await Ticket.find({ user: req.jwtData.userId, status: "rejected" });
        console.log(tickets.length);
        return response.withData(res, tickets.length);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});




module.exports = router;
