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
    analyzeTicket } = require("../models/ticket");
const { User } = require("../models/user");
const { Workflow } = require("../models/workflow");
const { Phase } = require("../models/phase");
const { Vendor } = require("../models/vendor");
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
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
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

  const { category, department, vendorName, numberOfItems,
    items, description, dueDate, amount, comment } = req.body;

  let vendorModel = await Vendor.find({name: vendorName});
  if(commonFunctions.isEmpty(vendorModel)) return response.error(res, "vendor is empty")
  // if(!vendorModel) return response.error(res, "Could not create or find vendor");

  vendorModel = await Vendor.create({ name: vendorName });

  const vendor = vendorModel._id;

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

    let ticketDueDate = ticket.dueDate.toString().substring(0, 10);

    const payload = {
      email: approver.email,
      firstName: approver.firstName,
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
      mailOptions: { mailType: "sendApprovalMail" }
    }
    await publishToQueue(payload);


    // let result = _.pick(ticket, ["ticketRef", "items", "numberOfItems", "category", "department", "vendor", "workflow", "dueDate", "amount"]);
    let ticketDetails = await ticket.populate('user category department vendor workflow phase document').execPopulate();
    let ticketDocuments = await Document.find({ticket: ticket._id});
    let comments = await Comment.find({ticket: ticket._id}).populate('user');

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

    // if (isNaN(parseInt(req.query.offset))) skipVal = 0;
    // else skipVal = parseInt(req.query.offset);

    // if (isNaN(parseInt(req.query.limit))) limitVal = 100;
    // else limitVal = parseInt(req.query.limit);


    // Get phases belonging to user
    phases = await Phase.find({approver: req.jwtData.userId});

    async function getMatchingTickets(phaseId) {
      const matchingTickets = await Ticket.find({ phase: phaseId, phaseStatus: 'pending' })
        .populate({
          path: 'user category department vendor workflow phase',
          populate: {
            path: 'phases',
            populate: { path: 'approver' }
          }
        });

      // const matchingTickets = await Ticket.aggregate([
      //   { $match: { phase: phaseId, phaseStatus: 'pending' } },
      //   { $sort: { updatedAt: -1 } },
      //   { $skip: skipVal },
      //   { $limit: limitVal },
      //   { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
      //   { "$unwind": "$user" },
      //   { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
      //   { "$unwind": "$category" },
      //   { $lookup: { from: "workflows", localField: "workflow", foreignField: "_id", as: "workflow" } },
      //   { "$unwind": "$workflow" },
      //   { $lookup: { from: "documents", localField: "_id", foreignField: "ticket", as: "ticketDocuments" } },
      //   { $lookup: { from: "comments", localField: "_id", foreignField: "ticket", as: "comments" } }
      // ]);

      return matchingTickets;
    }

    let tickets = [];

    // get matching tickets
    for ( const phase of phases ) {
      matchedTickets = await getMatchingTickets(phase._id);
      console.log("matchedTickets", matchedTickets);
      // add related document and comments to each ticket
      for (const ticket of matchedTickets) {
        console.log("ticket", ticket);
        if (!ticket) return response.error(res, "Error fetching tickets");
        let ticketObj = ticket.toObject();
        ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
        ticketObj.comments = await Comment.find({ ticket: ticket._id}).populate('user');
        tickets.push(ticketObj);
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
      const comments = await Comment.find({ ticket: ticket._id }).populate('user');
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
    let tickets = await Ticket.find({ user: req.jwtData.userId })
    .populate({
      path: 'user category department vendor phase workflow',
      populate: {
        path: 'phases',
        populate: { path: 'approver' }
      }
    });

    let ticketList = [];
    for (const ticket of tickets) {
      let ticketObj = ticket.toObject();
      ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
      ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
      ticketList.push(ticketObj);
    }

    // let ticketListDetails = [];

    // for (const ticket of ticketList) {
    //   const ticketDocuments = await Document.find({ ticket: ticket._id });
    //   const comments = await Comment.find({ ticket: ticket._id });
    //   const ticketDetails = { ticket, ticketDocuments, comments };
    //   ticketListDetails.push(ticketDetails);
    // }

    // if (isNaN(parseInt(req.query.offset))) skipVal = 0;
    // else skipVal = parseInt(req.query.offset);

    // if (isNaN(parseInt(req.query.limit))) limitVal = 100;
    // else limitVal = parseInt(req.query.limit);

    // const userId = mongoose.Types.ObjectId(req.jwtData.userId)
    // console.log("userId", userId)

    // let ticketList = await Ticket.aggregate([
    //   { $match: { user: userId } },
    //   { $sort: { updatedAt: -1 } },
    //   { $skip: skipVal },
    //   { $limit: limitVal },
    //   { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
    //   { "$unwind": "$user" },

    //   { $lookup: { from: "categories", localField: "category", foreignField: "_id", as: "category" } },
    //   { "$unwind": "$category" },

    //   { $lookup: { from: "workflows", localField: "workflow", foreignField: "_id", as: "workflow" } },
    //   { "$unwind": "$workflow" },

    //   { $lookup: { from: "phases", localField: "phase", foreignField: "_id", as: "phase" } },
    //   { "$unwind": "$phase" },

    //   { $lookup: { from: "documents", localField: "_id", foreignField: "ticket", as: "ticketDocuments" } },
    //   { $lookup: { from: "comments", localField: "_id", foreignField: "ticket", as: "comments" } },


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
    // ]);

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
    ticket = await Ticket.findOne({ user: req.jwtData.userId, _id: id })
    .populate({
      path: 'user category department vendor phase workflow',
      populate: {
        path: 'phases',
        populate: { path: 'approver' }
      }
    });

    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    let ticketObj = ticket.toObject();

    ticketObj.ticketDocuments = await Document.find({ ticket: id });
    ticketObj.comments = await Comment.find({ ticket: id }).populate('user');

    return response.withData(res, ticketObj);

  } catch (error) {
    console.error(error.message);
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


// get all approver tickets approved
router.get("/approver/ticket-approved", userAuth, async (req, res) => {
  try {
    const approverPhases = await Phase.find({ approver: req.jwtData.userId });
    if(!approverPhases) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    let approvedTickets = [];

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
              let approvedTicket = await ticket
              .populate({
                path: 'user category department vendor workflow phase',
                populate: {
                  path: 'phases',
                  populate: { path: 'approver' }
                }
              }).execPopulate();
              let ticketObj = approvedTicket.toObject();
              ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
              ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
              approvedTickets.push(ticketObj);
            } else if( currentPhaseIndex > approverPhaseIndex) {
              let approvedTicket = await ticket
              .populate({
                path: 'user category department vendor workflow phase',
                populate: {
                  path: 'phases',
                  populate: { path: 'approver' }
                }
              }).execPopulate();
              let ticketObj = approvedTicket.toObject();
              ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
              ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
              approvedTickets.push(ticketObj);
            }
          }
        }
      }
    }

    return response.withData(res, { approvedTickets });

  } catch (error) {
      console.error(error.message);
      return response.error(res, error.message);
  }
});


// get all approver tickets
router.get("/approver/tickets", userAuth, async (req, res) => {
  try {
    const approverPhases = await Phase.find({ approver: req.jwtData.userId });
    if(!approverPhases) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    let allApproverTickets = [];

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
            let approverTicket = await ticket
            .populate({
                path: 'user category department vendor workflow phase',
                populate: {
                  path: 'phases',
                  populate: { path: 'approver' }
                }
            }).execPopulate();

            let ticketObj = approverTicket.toObject();
            ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
            ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
            allApproverTickets.push(ticketObj);
          }
        }
      }
    }

    return response.withData(res, { allApproverTickets });

  } catch (error) {
      console.error(error.message);
      return response.error(res, error.message);
  }
});


// Get all approver tickets rejected
router.get("/approver/ticket-rejected", userAuth, async (req, res) => {
  try {
    const approverPhases = await Phase.find({ approver: req.jwtData.userId });
    if(!approverPhases) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    let rejectedTickets = [];

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
            let rejectedTicket = await ticket
            .populate({
              path: 'user category department vendor workflow phase',
              populate: {
                path: 'phases',
                populate: { path: 'approver' }
              }
            }).execPopulate();

            let ticketObj = rejectedTicket.toObject();
            ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
            ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
            rejectedTickets.push(ticketObj);
          }
        }
      }
    }

    return response.withData(res, { rejectedTickets });

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message);
  }
});


// Get all approver tickets pending
router.get("/approver/ticket-pending", userAuth, async (req, res) => {
  try {
    const approverPhases = await Phase.find({ approver: req.jwtData.userId });
    if(!approverPhases) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    let pendingTickets = [];

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

          if( currentPhaseIndex == approverPhaseIndex && ticket.phaseStatus == "pending" ) {
            let pendingTicket = await ticket
            .populate({
              path: 'user category department vendor workflow phase',
              populate: {
                path: 'phases',
                populate: { path: 'approver' }
              }
            }).execPopulate();

            let ticketObj = pendingTicket.toObject();
            ticketObj.ticketDocuments = await Document.find({ ticket: ticket._id });
            ticketObj.comments = await Comment.find({ ticket: ticket._id }).populate('user');
            pendingTickets.push(ticketObj);
          }
        }
      }
    }

    return response.withData(res, { pendingTickets });

  } catch (error) {
    console.error(error.message);
    return response.error(res, error.message);
  }
});





// Approve ticket
router.patch("/approve/:id", userAuth, async (req, res) => {
  const { id } = req.params;

  if (!req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);

  try {
    // get ticket and forward or mark as approved
    ticket = await Ticket.findById(id);
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);


    if(ticket.phaseStatus == "rejected" || ticket.phaseStatus == "approved")
      return response.error(res, TICKET_CONSTANTS.TICKET_ALREADY_TREATED);

    currentPhase = await Phase.findById(ticket.phase);
    if(!currentPhase) return response.error(res, TICKET_CONSTANTS.TICKET_PHASE_ERROR);

    if (!req.jwtData.userId == currentPhase.approver) return response.error(res, AUTH_CONSTANTS.RESOURCE_FORBIDDEN);

    workflow = await Workflow.findById(ticket.workflow);
    if(!workflow) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    let phaseCount = workflow.phases.length
    console.log("PHASE COUNT: " + phaseCount)

    let currentPhaseIndex = workflow.phases.indexOf(ticket.phase) + 1;
    if(currentPhaseIndex == -1) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    console.log("PHASE POSITION IS " + currentPhaseIndex);

    // process last phase
    if(currentPhaseIndex == phaseCount) {
      // save comments if exists
      if (req.body.comment && req.body.comment !== "") {
        const comment = new Comment({ comment: req.body.comment, user: req.jwtData.userId, ticket: ticket._id })
        await comment.save();
      }

      ticket.phaseStatus = "approved";
      ticket.status = "approved";
      await ticket.save();

      const user = await User.findById(ticket.user);
      if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

      const approver = await User.findById(req.jwtData.userId);
      if (!approver) return response.error(res, USER_CONSTANTS.INVALID_USER);

      let ticketDueDate = ticket.dueDate.toString().substring(0, 10);
      console.log("ticket description", ticket.description);

      // send approved mail to approver
      const mailApproverPayload = {
        email: approver.email,
        firstName: approver.firstName,
        ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
        mailOptions: { mailType: "sendApproverTicketApprovedMail" }
      }
      console.log("mailApproverPayload",mailApproverPayload);
      console.log("WE GOT HERE OOOOO",mailApproverPayload);
      await publishToQueue(mailApproverPayload);

      // send approved mail to requester
      const mailRequesterPayload = {
        email: user.email,
        firstName: user.firstName,
        ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
        mailOptions: { mailType: "sendRequesterTicketApprovedMail" }
      }
      await publishToQueue(mailRequesterPayload);

      return response.withData(res, ticket);
    }

    // save comments if exists
    if (req.body.comment && req.body.comment !== "") {
      const comment = new Comment({ comment: req.body.comment, user: req.jwtData.userId, ticket: ticket._id })
      await comment.save();
    }

    // const nextPhase = await Phase.findById(workflow.phases[currentPhase]);
    // if(!nextPhase) return response.error(res, TICKET_CONSTANTS.TICKET_PHASE_ERROR);

    ticket.phase = workflow.phases[currentPhaseIndex];
    await ticket.save();


    // get requester and approver
    const requester = await User.findById(ticket.user);
    if (!requester) return response.error(res, USER_CONSTANTS.INVALID_USER);

    const approver = await User.findById(req.jwtData.userId);
    if (!approver) return response.error(res, USER_CONSTANTS.INVALID_USER);

    let ticketDueDate = ticket.dueDate.toString().substring(0, 10);
    console.log("ticket description", ticket.description);

    // send approved mail to approver
    const mailApproverPayload = {
      email: approver.email,
      firstName: approver.firstName,
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
      mailOptions: { mailType: "sendApproverTicketApprovedMail" }
    }
    await publishToQueue(mailApproverPayload);

    // send approved mail to requester
    const mailRequesterPayload = {
      email: requester.email,
      firstName: requester.firstName,
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
      mailOptions: { mailType: "sendRequesterTicketApprovedMail" }
    }
    await publishToQueue(mailRequesterPayload);

    // send mail to next phase approver
    const nextPhase = await Phase.findById(ticket.phase);
    if (!nextPhase) return response.error(res, PHASE_CONSTANTS.PHASE_NOT_FOUND);

    const nextApprover = await User.findById(nextPhase.approver);
    if (!nextApprover) return response.error(res, USER_CONSTANTS.INVALID_USER);

    const mailNextApproverPayload = {
      email: nextApprover.email,
      firstName: nextApprover.firstName,
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
      mailOptions: { mailType: "sendApprovalMail" }
    }
    await publishToQueue(mailNextApproverPayload);

    return response.success(res);

  } catch (error) {
      return response.error(res, error.message);
  }
});


// Reject ticket
router.patch("/reject/:id", userAuth, async (req, res) => {
  const { id } = req.params;

  if (!req.jwtData.role.includes(config.get("approver-role")))
    return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN);

  try {
    // get ticket and mark as rejected
    ticket = await Ticket.findById(id);
    if(!ticket) return response.error(res, TICKET_CONSTANTS.TICKET_NOT_FOUND);

    if(ticket.phaseStatus == "rejected" || ticket.phaseStatus == "approved")
      return response.error(res, TICKET_CONSTANTS.TICKET_ALREADY_TREATED);

    currentPhase = await Phase.findById(ticket.phase);
    if(!currentPhase) return response.error(res, TICKET_CONSTANTS.TICKET_PHASE_ERROR);

    if (!req.jwtData.userId == currentPhase.approver) return response.error(res, AUTH_CONSTANTS.RESOURCE_FORBIDDEN);

    workflow = await Workflow.findById(ticket.workflow);
    if(!workflow) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    let phaseCount = workflow.phases.length
    console.log("COUNT: " + phaseCount)

    let currentPhaseIndex = workflow.phases.indexOf(ticket.phase) + 1;
    if(currentPhaseIndex == -1) return response.error(res, TICKET_CONSTANTS.TICKET_WORKFLOW_ERROR);

    console.log("PHASE IS " + currentPhaseIndex);
    console.log(workflow.phases[1]);

    // process last phase
    if(currentPhaseIndex == phaseCount) {

      //save comments if exists
      if (req.body.comment && req.body.comment !== "") {
        const comment = new Comment({ comment: req.body.comment, user: req.jwtData.userId, ticket: ticket._id })
        await comment.save();
      }

      ticket.phaseStatus = "rejected";
      ticket.status = "rejected";
      await ticket.save();

      //send reject mail to requester
      const user = await User.findById(ticket.user);
      if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

      let ticketDueDate = ticket.dueDate.toString().substring(0, 10);
      console.log("ticket description", ticket.description);

      const payload = {
        email: user.email,
        firstName: user.firstName,
        ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
        mailOptions: { mailType: "sendRequesterRejectMail" }
      }
      await publishToQueue(payload);

      return response.success(res);
    }

    //save comments if exists
    if (req.body.comment && req.body.comment !== "") {
      const comment = new Comment({ comment: req.body.comment, user: req.jwtData.userId, ticket: ticket._id })
      await comment.save();
    }

    ticket.phaseStatus = "rejected";
    ticket.status = "rejected";
    await ticket.save();

    //send rejected mail to requester
    const user = await User.findById(ticket.user);
    if (!user) return response.error(res, USER_CONSTANTS.INVALID_USER);

    let ticketDueDate = ticket.dueDate.toString().substring(0, 10);
    console.log("ticket description", ticket.description);

    const payload = {
      email: user.email,
      firstName: user.firstName,
      ticket: { description: ticket.description, items: ticket.items, dueDate: ticketDueDate },
      mailOptions: { mailType: "sendRequesterRejectMail" }
    }
    await publishToQueue(payload);

    return response.success(res);

  } catch (error) {
    return response.error(res, error.message);
  }
});


module.exports = router