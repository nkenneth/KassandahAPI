const { DASHBOARD_CONSTANTS, USER_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Ticket } = require("../models/ticket");
const { User } = require("../models/user");
const { userAuth } = require("../middleware/auth");
const { Phase } = require("../models/phase");
const { Workflow } = require("../models/workflow");


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
        return response.withData(res, { totalNumberOfPendingTickets: tickets.length });
    } catch (error) {
        return response.error(res, error.message);
    }

});


// Get  all approved user tickets count
router.get("/ticket-approved", userAuth, async (req, res) => {

    try {
        tickets = await Ticket.find({ user: req.jwtData.userId, status: "approved" });
        console.log(tickets.length);
        return response.withData(res, { totalNumberOfApprovedTickets: tickets.length });
    } catch (error) {
        return response.error(res, error.message);
    }

});


// Get  all rejected user tickets count
router.get("/ticket-rejected", userAuth, async (req, res) => {

    try {
        tickets = await Ticket.find({ user: req.jwtData.userId, status: "rejected" });
        console.log(tickets.length);
        return response.withData(res, { totalNumberOfRejectedTickets: tickets.length });
    } catch (error) {
        return response.error(res, error.message);
    }

});


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// APPROVER DASHBOARD STATS //////////////////////////////////////////////////////

// Get approved tickets by approver
router.get("/approver/ticket-approved", userAuth, async (req, res) => {
    try {
        const approverPhases = await Phase.find({ approver: req.jwtData.userId });
        if(!approverPhases) return response.withData(res, { approvedTicketsCount: 0 });

        let approvedTicketCount = 0;

        for (const approverPhase of approverPhases) {
            const approverPhaseId = approverPhase._id
            let workflows = await Workflow.find({ phases: approverPhaseId });
            let tickets = await Ticket.find({ workflow: { $in: workflows }});
            for (const ticket of tickets) {
                workflow = await Workflow.findById(ticket.workflow);
                if(workflow) {
                    let phaseCount = workflow.phases.length
                    console.log("COUNT phaseCount: " + phaseCount);
                    let currentPhaseIndex = workflow.phases.indexOf(ticket.phase);
                    console.log("COUNT currentPhaseIndex: " + currentPhaseIndex);
                    let approverPhaseIndex = workflow.phases.indexOf(approverPhaseId);
                    console.log("COUNT approverPhaseIndex: " + approverPhaseIndex);

                    if( currentPhaseIndex >= approverPhaseIndex ) {
                        if( currentPhaseIndex == approverPhaseIndex
                            && ticket.status !== "pending"
                            && ticket.status !== "rejected") {
                            approvedTicketCount++;
                        } else if( currentPhaseIndex > approverPhaseIndex) {
                            approvedTicketCount++;
                        }
                    }
                }
            }
        }

        return response.withData(res, { approvedTicketsCount: approvedTicketCount });

    } catch (error) {
        console.error(error.message);
        return response.error(res, error.message);
    }
});


// Get all approver tickets count
router.get("/approver/ticket-count", userAuth, async (req, res) => {
    try {
        const approverPhases = await Phase.find({ approver: req.jwtData.userId });
        if(!approverPhases) return response.withData(res, { allApproverTicketsCount: 0 });

        let ticketCount = 0;

        for (const approverPhase of approverPhases) {
            let workflows = await Workflow.find({ phases: approverPhase._id });
            let tickets = await Ticket.find({ workflow: { $in: workflows }});
            ticketCount += tickets.length;
        }

        return response.withData(res, { allApproverTicketsCount: ticketCount });

    } catch (error) {
        console.error(error.message);
        return response.error(res, error.message);
    }
});



// Get rejected tickets by approver
router.get("/approver/ticket-rejected", userAuth, async (req, res) => {
    try {
        const approverPhases = await Phase.find({ approver: req.jwtData.userId });
        if(!approverPhases) return response.withData(res, { rejectedTicketsCount: 0 });

        let rejectedTicketCount = 0;

        for (const approverPhase of approverPhases) {
            const approverPhaseId = approverPhase._id
            let workflows = await Workflow.find({ phases: approverPhaseId });
            let tickets = await Ticket.find({ workflow: { $in: workflows }});
            for (const ticket of tickets) {
                workflow = await Workflow.findById(ticket.workflow);
                if(workflow) {
                    let phaseCount = workflow.phases.length
                    console.log("COUNT phaseCount: " + phaseCount);
                    let currentPhaseIndex = workflow.phases.indexOf(ticket.phase);
                    console.log("COUNT currentPhaseIndex: " + currentPhaseIndex);
                    let approverPhaseIndex = workflow.phases.indexOf(approverPhaseId);
                    console.log("COUNT approverPhaseIndex: " + approverPhaseIndex);

                    if( currentPhaseIndex == approverPhaseIndex && ticket.phaseStatus == "rejected" ) {
                        rejectedTicketCount++;
                    }
                }
            }
        }

        return response.withData(res, { rejectedTicketsCount: rejectedTicketCount });

    } catch (error) {
        console.error(error.message);
        return response.error(res, error.message);
    }
});


module.exports = router;
