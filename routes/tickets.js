const { TICKET_CONSTANT}  = require("../config/constant.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcrypt");
const response = require("../services/response");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Ticket, 
    validateTicketPost,
    validateTicketPut,
    getRandomString } = require("../models/ticket");
const { Workflow } = require("../models/workflow");
const { Phase } = require("../models/phase");
const { Category } = require("../models/category");
const { Sla } = require("../models/sla");
const { userAuth } = require("../middleware/auth.js");

mongoose.set("debug", true);


//Get Ticket

router.get("/", userAuth, async (req, res)=>{
    let ticket = {};
    var skipVal, limitVal;
  if (isNaN(parseInt(req.query.offset))) skipVal = 0;
  else skipVal = parseInt(req.query.offset);

  if (isNaN(parseInt(req.query.limit))) limitVal = 500;
  else limitVal = parseInt(req.query.limit);

  
  if (req.query.reference) {
    var regexName = new RegExp(req.query.reference, "i");
    ticket.reference = regexName;
  }
  if(req.query.userId) ticket.userId = req.query.userId
  if(req.query.categoryId) ticket.categoryId = req.query.categoryId
  if(req.query.workflowId) ticket.workflowId = req.query.workflowId
  if(req.query.phaseId) ticket.phaseId = req.query.phaseId
  if(req.query.status) ticket.status = req.query.status

  let ticketList = await Ticket.aggregate([
    { $match: ticket },
    { $sort: { insertDate: -1 } },
    { $skip: skipVal },
    { $limit: limitVal },
    { $lookup: { from: "user", localField: "id", foreignField: "userid", as: "userData" } },
    { $lookup: { from: "phase", localField: "id", foreignField: "phaseId", as: "phaseData" } },
    { $lookup: { from: "workflow", localField: "id", foreignField: "workflowId", as: "workflowData" } },
    { $lookup: { from: "category", localField: "id", foreignField: "categoryId", as: "categoryData" } },
    { $project : {
        _id:0,
        reference: 1,
        code: 1,
        user: { $arrayElemAt: [ "$userData.firstname", 0] },
        workflow: { $arrayElemAt: ["$workflowData.reference", 0] },
        phase: { $arrayElemAt: [ "$phaseData.reference", 0] },
        category: { $arrayElemAt: [ "$categoryData.reference", 0] },
        userId: 1,
        workflowid: 1,
        phaseId: 1,
        categoryId: 1,
        insertDate: 1,
        creationDate: 1,   
     }}
  ])
  res.send({ statusCode: 200, message: "Success", data: { ticketList } });

})

// Create Ticket

router.post("/", async (req, res) =>{
    const { error } = validateTicketPost(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);
  let ticket = await Ticket.findOne({
    $or: [{ reference: req.body.reference.toLowerCase() }, { code: req.body.code }],
  });

  if (ticket) {
    if (req.body.reference === ticket.reference)
      return response.error(res, TICKET_CONSTANT.DUPLICATE_TICKET, 400);
  }

  const reference = req.body.reference.toLowerCase();
  const {  userId, phaseId, categoryId, workflowId,  description, vendor, numberOfItems, items, dueDate, document, amount } = req.body;

  console.log( { reference, userId, phaseId, categoryId, workflowId, description, vendor, numberOfItems, items, dueDate, document, amount } );
  //Generate Ticket Code
  const code = getRandomString(7)
  try {
      //Instatiate Ticket entity
      ticket = new Ticket({ reference, code, phaseId, userId, workflowId, categoryId, status:"Open", description, vendor, numberOfItems, items, dueDate, document, amount})

      
    // save user to db
    await ticket.save();
    let result = _.pick(ticket, ["reference","userId", "phaseId", "workflowId", "categoryId", "Status", "description", "vendor", "numberOfItems", "items", "dueDate", "document", "amount"])

    return response.success(res, TICKET_CONSTANT.TICKET_ADDED);
  } catch (error) {
    console.error(err.message);
    return response.error(res, err.message, 500);
  }

})

module.exports = router