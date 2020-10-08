const { TICKET_CONSTANTS, USER_CONSTANTS }  = require("../config/constant.js");
const { userAuth, adminAuth } = require("../middleware/auth");
const mongoose = require("mongoose");
const response = require("../services/response");
const _ = require("lodash");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const fileService = require("../services/fileService");
const path = require("path");
const router = express.Router();
const { Ticket, 
    validateTicketPost,
    validateTicketPatch,
    analyzeTicket} = require("../models/ticket");
const { User } = require("../models/user");
const { Workflow } = require("../models/workflow");
const { Phase } = require("../models/phase");
const { Category } = require("../models/category");
const { sendPhaseApprovalMail } = require("../services/amazonSes");
const { Z_NEED_DICT } = require("zlib");
const { WorkMailMessageFlow } = require("aws-sdk");


// mongoose.set("debug", true);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './storage/ticketdocs/');
  },

  // add file extensions
  filename: function(req, file, cb) {
      let extension = path.extname(file.originalname);
      let filenameWithoutExtention = path.basename(file.originalname, extension);
      cb(null, file.fieldname + '-' + Date.now() + '-' + filenameWithoutExtention + extension);
  }
});

let upload = multer({ storage: storage, fileFilter: fileService.documentFilter }).array('documents', 5);


// Create ticket
router.post("/", userAuth, upload, async (req, res) => { 
  const { error } = validateTicketPost(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);

  if(req.fileValidationError) {
    req.files.forEach( (file) => { fs.unlinkSync(file.path) })
    return response.error(res, req.fileValidationError);
  }

  if (!req.files) {
    return response.error(res, 'Please select a document to upload');
  }


  // collect reference from invoice and make lowercase
  const ref = req.body.ref;
  
  //set userId
  user = await User.findOne({email: req.jwtData.email});
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  const userId = user._id;
  
  let isPossibleDuplicate = false;

  const { category, department, vendor, numberOfItems, items, description, dueDate, amount } = req.body;

  // mitigate duplicate ticket issuing
  payload = await analyzeTicket(category, vendor, amount, dueDate, ref);

  // if (payload.ref_match == true) return response.error(res, TICKET_CONSTANTS.DUPLICATE_TICKET);
  if (payload.score >= 50) isPossibleDuplicate = true;

  try {
    // Generate ticket reference
    const ticketRef = `${Date.now()}${ref}`;

    // Fetch ticket category
    const categoryModel = await Category.findById(category);
    console.log(categoryModel);

    // Fetch ticket workflow
    const workflowModel = await Workflow.findById(categoryModel.workflow);
    const workflow = workflowModel._id;
    console.log(workflow);

    // Set ticket current phase 
    const phase = workflowModel.phases[0];

    // Instatiate ticket entity
    ticket = new Ticket({ 
      ref, ticketRef, user: userId, category, department, 
      description, vendor, workflow, phase, numberOfItems, 
      items, dueDate, amount, isPossibleDuplicate
    });

    // Persit ticket
    await ticket.save();

    // Fetch phase model and email approver
    const phaseModel = await Phase.findById(phase);
    const approverEmail = await User.findById(phaseModel.approver).email;

    //  TODO: sendTicketApprovalEmail()
    // sendPhaseApprovalMail(user.email, user.firstName, `http://localhost:9700/api/user/verify/${token.token}`);

    // let result = _.pick(ticket, ["ticketRef", "items", "numberOfItems", "category", "department", "vendor", "workflow", "dueDate", "amount"]);
    let result = await ticket.populate('user category department vendor workflow phase').execPopulate();

    // return response.success(res, TICKET_CONSTANTS.TICKET_CREATED);
    return response.withData(res, result);

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message, 500);
  }
});


// Update ticket
router.patch("/", userAuth, upload, async (req, res) => { 
  const { error } = validateTicketPost(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);

  if(req.fileValidationError) {
    req.files.forEach( (file) => { fs.unlinkSync(file.path) })
    return response.error(res, req.fileValidationError);
  }

  if (!req.files) {
    return response.error(res, 'Please select a document to upload');
  }


  // collect reference from invoice and make lowercase
  const ref = req.body.ref;
  
  //set userId
  user = await User.findOne({email: req.jwtData.email});
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  const userId = user._id;
  
  let isPossibleDuplicate = false;

  const { category, department, vendor, numberOfItems, items, description, dueDate, amount } = req.body;

  // mitigate duplicate ticket issuing
  payload = await analyzeTicket(category, vendor, amount, dueDate, ref);

  // if (payload.ref_match == true) return response.error(res, TICKET_CONSTANTS.DUPLICATE_TICKET);
  if (payload.score >= 50) isPossibleDuplicate = true;

  try {
    // Generate ticket reference
    const ticketRef = `${Date.now()}${ref}`;

    // Fetch ticket category
    const categoryModel = await Category.findById(category);
    console.log(categoryModel);

    // Fetch ticket workflow
    const workflowModel = await Workflow.findById(categoryModel.workflow);
    const workflow = workflowModel._id;
    console.log(workflow);

    // Set ticket current phase 
    const phase = workflowModel.phases[0];

    // Instatiate ticket entity
    ticket = new Ticket({ 
      ref, ticketRef, user: userId, category, department, 
      description, vendor, workflow, phase, numberOfItems, 
      items, dueDate, amount, isPossibleDuplicate
    });

    // Persit ticket
    await ticket.save();

    // Fetch phase model and email approver
    const phaseModel = await Phase.findById(phase);
    const approverEmail = await User.findById(phaseModel.approver).email;

    //  TODO: sendTicketApprovalEmail()
    // sendPhaseApprovalMail(user.email, user.firstName, `http://localhost:9700/api/user/verify/${token.token}`);

    // let result = _.pick(ticket, ["ticketRef", "items", "numberOfItems", "category", "department", "vendor", "workflow", "dueDate", "amount"]);
    let result = await ticket.populate('user category department vendor workflow phase').execPopulate();

    // return response.success(res, TICKET_CONSTANTS.TICKET_CREATED);
    return response.withData(res, result);

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message, 500);
  }
});



// Get ticket list awaiting approval by authenticated user
router.get("/pending", userAuth, async (req, res) => {
  
  // get phases belonging to user
  phases = await Phase.find({approver: req.jwtData.userId});

  async function getMatchingTickets(phaseId) {
    const matchingTicket = await Ticket.find({phase: phaseId, phaseStatus: 'pending'})
    console.log(matchingTicket)
    return matchingTicket
  }  

  const tickets = [];

  // get matching tickets
  for(const phase of phases) {
    tickets.push( await getMatchingTickets(phase._id))
  }
  
  response.withData(res,  { phases, tickets });

});


// Get Ticket List
router.get("/", userAuth, async (req, res)=> {
  try {
    ticketList = await Ticket.find({});
    console.log(ticketList);
    return response.withData(res, ticketList);
  } catch (error) {
      console.log(error);
      return response.error(res, error.message);
  }
  
})


// Get  Single Ticket
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
      ticket = await Ticket.findById(id);
      if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
      console.log(ticket);
      return response.withData(res, ticket);
  } catch (error) {
      return response.error(res, error.message);
  }
  
});


// Approve ticket
router.patch("/approve/:id", async (req, res) => {
  const { id } = req.params;

  try {

    // get ticket and forward or mark as approved
    ticket = await Ticket.findById(id);
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
    if(ticket.phaseStatus == "rejected" || ticket.phaseStatus == "approved") 
      return response.error(res, TICKET_CONSTANTS.TICKET_TREATED);
    console.log(ticket);
    
    workflow = await Workflow.findById(ticket.workflow);
    if(!workflow) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    let phaseCount = workflow.phases.length
    console.log("COUNT: " + phaseCount)

    let currentPhase = workflow.phases.indexOf(ticket.phase) + 1;
    if(currentPhase == -1) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    console.log("PHASE IS " + currentPhase);
    console.log(workflow.phases[1]);

    // process last phase
    if(currentPhase == phaseCount) {
      ticket.phaseStatus = "approved";
      ticket.status = "approved";
      ticket.save();

      // TODO: send approve mail to requester

      return response.withData(res, ticket);
    }

    phase = await Phase.findById(workflow.phases[currentPhase]);
    if(!phase) return response.error(res, TICKET_CONSTANTS.TICKET_PHASE_ERROR);

    ticket.phase = workflow.phases[currentPhase];
    ticket.save();

    // TODO: send mail to next p hase approver

    return response.success(res);

  } catch (error) {
      return response.error(res, error.message);
  }
});


// Reject ticket
router.patch("/reject/:id", async (req, res) => {
  const { id } = req.params;

  try {

    // get ticket and mark as rejected
    ticket = await Ticket.findById(id);
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
    if(ticket.phaseStatus == "rejected" || ticket.phaseStatus == "approved") 
      return response.error(res, TICKET_CONSTANTS.TICKET_TREATED);
    console.log(ticket);
    
    workflow = await Workflow.findById(ticket.workflow);
    if(!workflow) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    let phaseCount = workflow.phases.length
    console.log("COUNT: " + phaseCount)

    let currentPhase = workflow.phases.indexOf(ticket.phase) + 1;
    if(currentPhase == -1) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    console.log("PHASE IS " + currentPhase);
    console.log(workflow.phases[1]);

    // process last phase
    if(currentPhase == phaseCount) {
      ticket.phaseStatus = "rejected";
      ticket.status = "rejected";
      ticket.save();

      // TODO: send reject mail to requester

      return response.withData(res, ticket);
    }

    ticket.phaseStatus = "rejected";
    ticket.save();

    // TODO: send rejected mail to requester

    return response.success(res);

  } catch (error) {
      return response.error(res, error.message);
  }
});


module.exports = router