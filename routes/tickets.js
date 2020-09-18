const { TICKET_CONSTANTS, USER_CONSTANTS }  = require("../config/constant.js");
const { userAuth, adminAuth } = require("../middleware/auth");
const mongoose = require("mongoose");
const response = require("../services/response");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const { Ticket, 
    validateTicketPost,
    validateTicketPatch,
    analyzeTicket} = require("../models/ticket");
const { User } = require("../models/user");
const { Workflow } = require("../models/workflow");
const { Phase } = require("../models/phase");
const { Category } = require("../models/category");
const { Sla } = require("../models/sla");

mongoose.set("debug", true);


// Create ticket
router.post("/", userAuth, async (req, res) => {
  const { error } = validateTicketPost(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);

  // collect reference from invoice and make lowercase
  const ref = req.body.ref.toLowerCase();
  
  //set userId
  user = await User.findOne({email: req.jwtData.email});
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  const userId = user._id;
  
  const { category, department, vendor, numberOfItems, items, description, dueDate, amount } = req.body;

  // mitigate duplicate ticket issuing
  payload = await analyzeTicket(category, vendor, amount, dueDate, ref);

  if (payload.ref_match == true) return response.error(res, TICKET_CONSTANTS.DUPLICATE_TICKET);
  
  switch (payload.score) {
    case 100:
      return response.error(res, TICKET_CONSTANTS.DUPLICATE_TICKET);
  
    case 75:
      return response.error(res, TICKET_CONSTANTS.POSSIBLE_DUPLICATE_TICKET);
  
    case 50:
      user.isCheck = true;

    default:
      break;
  }

  // Generate ticket reference
  const ticketRef = `${Date.now()}${ref}`;

  try {

    // const categoryModel = await Category.findById(category).populate("workflow");
    // console.log('ASADFLKAS;DFASJKDF;LA')
    // console.log(categoryModel);
    // return response.success(res, "IGOTHERE");

    // Instatiate Ticket entity
    ticket = new Ticket({ 
      ref, ticketRef, user: userId, category, description, vendor, numberOfItems, items, dueDate, amount
    });

    // Persit ticket
    await ticket.save();

    return response.success(res, TICKET_CONSTANTS.TICKET_CREATED);

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message, 500);
  }

});


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


module.exports = router
