const { TICKET_CONSTANTS, USER_CONSTANTS, PHASE_CONSTANTS, AUTH_CONSTANTS, MIDDLEWARE_AUTH_CONSTANTS }  = require("../config/constant.js");
const config = require("config");
const { userAuth, adminAuth } = require("../middleware/auth");
const mongoose = require("mongoose");
const response = require("../services/response");
const commonFunctions = require("../services/commonFunctions");
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
const { Document } = require("../models/document");
const { Comment } = require("../models/comment");
const { publishToQueue } = require("../services/MQService");
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
      let filenameOnly = filenameWithoutExtention.split(' ').join('');
      cb(null, file.fieldname + '-' + Date.now() + '-' + filenameOnly + extension);
  }
});

let upload = multer({ storage: storage, fileFilter: fileService.documentFilter }).array('documents', 5);


// Update ticket
router.patch("/:id", userAuth, upload, async (req, res) => { 
  const { error } = validateTicketPatch(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);


  if (req.fileValidationError) {
    req.files.forEach( (file) => { fs.unlinkSync(file.path) })
    return response.error(res, req.fileValidationError);
  }

  const { id } = req.params;

  let ticket = await Ticket.findById(id);
  if (!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
  
  //set userId
  user = await User.findOne({email: req.jwtData.email});
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  const userId = user._id;

  if (ticket.userId != userId) return response.error(res, TICKET_CONSTANTS.TICKET_WRONG_OWNER);

  // save comments if exists
  if (req.body.comment) {
    comment = new Comment({ comment: comment, user: userId, ticket: ticket._id })
    await comment.save();
  }
  
  // collect reference from invoice and make lowercase
  const ref = req.body.ref.toLowerCase();

  const { category, department, vendor, numberOfItems, items, description, dueDate, amount } = req.body;

  const retainPhase = false;
  if (ticket.category == category) retainPhase = true;

  try {

    if(retainPhase) {
      // Update ticket entity
      updateTicket = await ticket.updateOne({ 
        ref, category, department, description, vendor, numberOfItems, items, dueDate, amount
      });

      const phaseModel = await Phase.findById(ticket.phase);
      const approver = await User.findById(phaseModel.approver);
    } else {
       // Fetch ticket category
      const categoryModel = await Category.findById(category);
      console.log(categoryModel);

      // Fetch ticket workflow
      const workflowModel = await Workflow.findById(categoryModel.workflow);
      const workflow = workflowModel._id;
      console.log(workflow);

      // Set ticket current phase 
      const phase = workflowModel.phases[0];

      // Update ticket entity
      updateTicket = await ticket.updateOne({ 
        ref, category, department, description, vendor, workflow, phase, 
        numberOfItems, items, dueDate, amount
      });


      // Fetch phase model and email approver
      const phaseModel = await Phase.findById(phase);
      if (!phaseModel) return response.error(PHASE_CONSTANTS.PHASE_NOT_FOUND);


      const approver = await User.findById(phaseModel.approver);
      if (!approver) return response.error(USER_CONSTANTS.INVALID_USER);

    }

    const payload = {
      email: approver.email,
      firstName: approver.firstName,
      mailOptions: { mailType: "sendApprovalMail" }
    }
    await publishToQueue(payload);


  
    // let result = _.pick(ticket, ["ticketRef", "items", "numberOfItems", "category", "department", "vendor", "workflow", "dueDate", "amount"]);
    let result = await ticket.populate('user category department vendor workflow phase').execPopulate();

    return response.withData(res, result);

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message, 400);
  }
});



// Create ticket
router.post("/", userAuth, upload, async (req, res) => { 
  const { error } = validateTicketPost(req.body)
  if (error) return response.validationErrors(res, error.details[0].message);

  
  if (req.fileValidationError) {
    req.files.forEach( (file) => { fs.unlinkSync(file.path) })
    return response.error(res, req.fileValidationError);
  }
  

  // collect reference from invoice and make lowercase
  const ref = req.body.ref;
  
  //set userId
  user = await User.findOne({email: req.jwtData.email});
  if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);
  const userId = user._id;
  
  let isPossibleDuplicate = false;

  const { category, department, vendor, numberOfItems, items, description, dueDate, amount, comment } = req.body;

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

    // Store document paths
    console.log(req.files)
    if (!commonFunctions.isEmpty(req.files)) {
      
      for(const document of req.files) {
        documentPath = document.path.replace(/storage/, `${config.get('APP_URL')}`);

        let documentModel = await Document.create({ ticket: ticket._id, document: documentPath });
        console.log(`Document path stored: ${documentPath}`);
      }

    }

    // Store comment
    console.log(req.body.comment);
    if (comment != "" || comment != null) {
      
        let commentModel = await Comment.create({ ticket: ticket._id, user: user._id, comment: comment });
        console.log(`Comment stored: ${comment}`);

    }

    // Fetch phase model and email approver
    const phaseModel = await Phase.findById(phase);
    if (!phaseModel) return response.error(res, PHASE_CONSTANTS.PHASE_NOT_FOUND);

    const approver = await User.findById(phaseModel.approver);
    if (!approver) return response.error(res, USER_CONSTANTS.INVALID_USER);

    const payload = {
      email: approver.email,
      firstName: approver.firstName,
      mailOptions: { mailType: "sendApprovalMail" }
    }
    await publishToQueue(payload);


    // let result = _.pick(ticket, ["ticketRef", "items", "numberOfItems", "category", "department", "vendor", "workflow", "dueDate", "amount"]);
    let ticketDetails = await ticket.populate('user category department vendor workflow phase document').execPopulate();
    let ticketDocuments = await Document.find({ticket: ticket._id});
    let comments = await Comment.find({ticket: ticket._id});

    // return response.success(res, TICKET_CONSTANTS.TICKET_CREATED);
    return response.withDataAndMsg(res, 'Ticket submitted successfully!', { ticketDetails, ticketDocuments, comments });

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message, 500);
  }
});


// Get ticket list awaiting approval by authenticated user
router.get("/pending", userAuth, async (req, res) => {
  
  try {

    if (isNaN(parseInt(req.query.offset))) skipVal = 0;
    else skipVal = parseInt(req.query.offset);

    if (isNaN(parseInt(req.query.limit))) limitVal = 100;
    else limitVal = parseInt(req.query.limit);


    // Get phases belonging to user
    phases = await Phase.find({approver: req.jwtData.userId});

    async function getMatchingTickets(phaseId) {
      // const matchingTickets = await Ticket.find({ phase: phaseId, phaseStatus: 'pending' })
      //   .populate({ 
      //     path: 'user category department vendor workflow phase',
      //     populate: { 
      //       path: 'phases',
      //       populate: { path: 'approver' } 
      //     }
      //   });

      const matchingTickets = await Ticket.aggregate([
        { $match: { phase: phaseId, phaseStatus: 'pending' } },
        { $sort: { updatedAt: -1 } },
        { $skip: skipVal },
        { $limit: limitVal },
        { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
        { "$unwind": "$user" },
        { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
        { "$unwind": "$category" },
        { $lookup: { from: "workflows", localField: "workflow", foreignField: "_id", as: "workflow" } },
        { "$unwind": "$workflow" },
        { $lookup: { from: "documents", localField: "_id", foreignField: "ticket", as: "ticketDocuments" } },
        { $lookup: { from: "comments", localField: "_id", foreignField: "ticket", as: "comments" } }
      ]);
      
      return matchingTickets;
    }  

    let tickets = [];

    // get matching tickets
    for ( const phase of phases ) {
      matchedTickets = await getMatchingTickets(phase._id);

      for (const ticket of matchedTickets) {
      //   ticketDocument = await Document.find({ ticket: ticket._id });
      //   comments = await Comment.find({ ticket: ticket._id});
      //   let ticketDetail = { ticket, ticketDocument, comments }
        tickets.push(ticket);

      }
    }

    // console.log(tickets);
    return response.withData(res, { tickets });

  } catch (error) {
    console.log(error);
    return response.error(res, error.message);
  }
  
});


// Get ticket list
router.get("/", userAuth, async (req, res) => {
  try {
    // ticketList = await Ticket.find({}).populate('user category department vendor workflow phase');
    let ticketList = await Ticket.find({ user: req.jwtData.userId }).populate({
      path: 'user category department vendor workflow phase',
      populate: {
        path: 'phases',
        populate: { path: 'approver' }
      }
    });
    console.log(ticketList);

    let ticketListDetails = [];
    
    for (const ticket of ticketList) {
      const ticketDocuments = await Document.find({ ticket: ticket._id });
      const comments = await Comment.find({ ticket: ticket._id });
      const ticketDetails = { ticket, ticketDocuments, comments }
      ticketListDetails.push(ticketDetails);
    }

    return response.withData(res, { ticketListDetails });
  } catch (error) {
    console.log(error);
    return response.error(res, error.message);
  }
  
});


// Get user owned ticket lists
router.get("/my-tickets", userAuth, async (req, res) => {

  try {
    // let ticketList = await Ticket.find({ user: req.jwtData.userId }).populate('user category department vendor workflow phase');
    // let ticketList = await Ticket.find({ user: req.jwtData.userId })
    // .populate({
    //   path: 'user category department vendor workflow',
    //   populate: {
    //     path: 'phases',
    //     populate: { path: 'approver' }
    //   }
    // });
    // console.log(ticketList);

    // let ticketListDetails = [];
    
    // for (const ticket of ticketList) {
    //   const ticketDocuments = await Document.find({ ticket: ticket._id });
    //   const comments = await Comment.find({ ticket: ticket._id });
    //   const ticketDetails = { ticket, ticketDocuments, comments };
    //   ticketListDetails.push(ticketDetails);
    // }

    if (isNaN(parseInt(req.query.offset))) skipVal = 0;
    else skipVal = parseInt(req.query.offset);

    if (isNaN(parseInt(req.query.limit))) limitVal = 100;
    else limitVal = parseInt(req.query.limit);
    
    const userId = mongoose.Types.ObjectId(req.jwtData.userId)
    console.log("userId", userId)

    let ticketList = await Ticket.aggregate([
      { $match: { user: userId } },
      { $sort: { updatedAt: -1 } },
      { $skip: skipVal },
      { $limit: limitVal },
      { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
      { "$unwind": "$user" },
      
      { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
      { "$unwind": "$category" },
      
      { $lookup: { from: "workflows", localField: "workflow", foreignField: "_id", as: "workflow" } },
      { "$unwind": "$workflow" },


      { $lookup: { from: "documents", localField: "_id", foreignField: "ticket", as: "ticketDocuments" } },
      { $lookup: { from: "comments", localField: "_id", foreignField: "ticket", as: "comments" } },

      
      // { "$lookup": {
      //   "from": "document",
      //   "pipeline": [
      //     { "$match": { "ticket": mongoose.Types.ObjectId(_id) }},
      //   ],
      //   "as": "subdocument"
      // }},
      // { "$unwind": "$subdocument" },
      // {
      //   $project: {
      //     _id: 0,
      //     user: 1,
      //     vendor: 1,
      //     department: 1,
      //     category: 1,
      //     ticketDocuments: { $arrayElemAt: ["$ticketDocuments.document", 1] },
      //   },
      // }
    ]);

    console.log("ticketList", ticketList);

    return response.withData(res, { ticketList });

  } catch (error) {
    console.log(error);
    return response.error(res, error.message);
  }
  
});


// Get single ticket
router.get("/:id", userAuth, async (req, res) => {
  const { id } = req.params;
  try {
    ticket = await Ticket.findById(id);
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
    console.log(ticket);
    let result = ticket.populate('user category department vendor workflow phase').execPopulate();
    return response.withData(res, result);
  } catch (error) {
    return response.error(res, error.message);
  }
});


// Get user owned single ticket
router.get("/my-tickets/:id", userAuth, async (req, res) => {
  const { id } = req.params;
  try {
    ticket = await Ticket.find({ user: req.jwtData.userId, _id: id })
    .populate({
      path: 'user category department vendor workflow',
      populate: {
        path: 'phases',
        populate: { path: 'approver' }
      }
    });
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);
    console.log(ticket);

    const ticketDocuments = await Document.find({ ticket: id });
    const comments = await Comment.find({ ticket: id });
    const ticketDetails = { ticket, ticketDocuments, comments };
    
    return response.withData(res, ticketDetails);
  } catch (error) {
    return response.error(res, error.message);
  }
  
});



// Get ticket count pending treatment by authenticated approver
router.get("/approver/pending", userAuth, async (req, res) => {

  console.log(req.jwtData.role)
  if (req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);
  
  try {

    approverPhases = await Phase.find({ approver: req.jwtData.userId });

    let tickets = [];
    for (const approverPhase of approverPhases) {
      tickets.push = await Ticket.find({
        $or: [{ phaseStatus: "pending" }], phase: approverPhase._id
      });
    }

    console.log(tickets.length);
    // let result = tickets.populate('user category department vendor workflow phase').execPopulate();
    
    return response.withData(res, tickets.length);

  } catch (error) {
    return response.error(res, error.message);
  }
});

// Get tickets approved count by authenticated approver
router.get("/approver/approved", userAuth, async (req, res) => {

  console.log(req.jwtData.role)
  if (req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);
  
  try {

    approverPhases = await Phase.find({ approver: req.jwtData.userId });

    let tickets = [];
    for (const approverPhase of approverPhases) {
      tickets.push = await Ticket.find({
        $or: [{ phaseStatus: "approved" }], phase: approverPhase._id
      });
    }

    console.log(tickets.length);
    // let result = tickets.populate('user category department vendor workflow phase').execPopulate();
    
    return response.withData(res, tickets.length);

  } catch (error) {
    return response.error(res, error.message);
  }
  
});


// Get tickets rejected count by authenticated approver
router.get("/approver/rejected", userAuth, async (req, res) => {

  console.log(req.jwtData.role)
  if (req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);
  
  try {

    approverPhases = await Phase.find({ approver: req.jwtData.userId });

    let tickets = [];
    for (const approverPhase of approverPhases) {
      tickets.push = await Ticket.find({
        $or: [{ phaseStatus: "rejected" }], phase: approverPhase._id
      });
    }

    console.log(tickets.length);
    // let result = tickets.populate('user category department vendor workflow phase').execPopulate();
    
    return response.withData(res, tickets.length);

  } catch (error) {
    return response.error(res, error.message);
  }
  
});


// Approve ticket
router.patch("/approve/:id", userAuth, async (req, res) => {
  const { id } = req.params;

  console.log(req.jwtData.role)
  if (req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);
  
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
      await ticket.save();

      const user = await User.findById(ticket.user);
      if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

      // send approved mail to requester
      const payload = {
        email: approver.email,
        firstName: approver.firstName,
        mailOptions: { mailType: "sendApprovalMail" }
      }
      await publishToQueue(payload);

      return response.withData(res, ticket);
    }

    const phase = await Phase.findById(workflow.phases[currentPhase]);
    if(!phase) return response.error(res, TICKET_CONSTANTS.TICKET_PHASE_ERROR);

    ticket.phase = workflow.phases[currentPhase];
    await ticket.save();

    // send mail to next phase approver
    const nextPhase = await Phase.findById(ticket.phase);
    if (!nextPhase) return response.error(res, PHASE_CONSTANTS.PHASE_NOT_FOUND);

    const user = await User.findById(nextPhase.approver);
    if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

    const payload = {
      email: user.email,
      firstName: user.firstName,
      mailOptions: { mailType: "sendApprovalMail" }
    }
    await publishToQueue(payload);

    return response.success(res);

  } catch (error) {
      return response.error(res, error.message);
  }
});


// Reject ticket
router.patch("/reject/:id", userAuth, async (req, res) => {
  const { id } = req.params;

  console.log(req.jwtData.role)
  if (req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);

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
      await ticket.save();

      // send reject mail to requester
      user = await User.findById(ticket.user);
      if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

      const payload = {
      email: user.email,
      firstName: user.firstName,
      mailOptions: { mailType: "sendRejectMail" }
      }
      await publishToQueue(payload);

      return response.withData(res, ticket);
    }

    ticket.phaseStatus = "rejected";
    await ticket.save();

    // send rejected mail to requester

    user = await User.findById(ticket.user);
    if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

    const payload = {
      email: user.email,
      firstName: user.firstName,
      mailOptions: { mailType: "sendRejectMail" }
    }
    await publishToQueue(payload);

    return response.success(res);

  } catch (error) {
    return response.error(res, error.message);
  }
});


module.exports = router