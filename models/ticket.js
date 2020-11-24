const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");


const TicketSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ref: { type: String, required: true },
    ticketRef: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
    items: { type: String, required: true },
    numberOfItems: { type: Number,  required: true },
    description: { type: String, default: "", required: true },
    dueDate: { type: Date, required: true },
    amount: { type: Number,  required: true},
    phase: { type: mongoose.Schema.Types.ObjectId, ref: "Phase", required: true },
    phaseStatus: { type: String, enum: [ "approved", "rejected", "pending" ], default: "pending" },
    workflow: { type: mongoose.Schema.Types.ObjectId, ref: "Workflow", required: true },
    isPossibleDuplicate: { type: Boolean, default: false },
    status: { type: String, enum: [ "approved", "rejected", "pending" ], default: "pending" }
}, { timestamps: true });

const Ticket = mongoose.model("Ticket", TicketSchema);


const ticketAuditSchema = new mongoose.Schema({
    user: String,
    ticket: { type: mongoose.Schema.Types.ObjectId, ref: "Ref", required: true },
    ticketRef: String,
    category: String,
    department: String,
    vendor: String,
    workflow: String,
    phase: String,
    isPossibleDuplicate: String,
    status: String,
    phaseStatus: String,
    modifiedBy: String
}, { timestamps: true });

const TicketAudit = mongoose.model("Ticketaudit", ticketAuditSchema);


function validateTicketPost(ticket) {
    const schema = {
        ref: Joi.string().min(2).max(200).required(),
        items: Joi.string().min(2).max(200).required(),
        numberOfItems: Joi.number().min(0).max(200).required(),
        vendor: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        department: Joi.string().required(),
        dueDate: Joi.date().min('now').iso().required(),
        amount: Joi.number().min(0).required(),
        comment: Joi.string().allow("")
    };
    return Joi.validate(ticket, schema);
}

function validateTicketPatch(ticket) {
    const schema = {
        ref: Joi.string().min(2).max(200).required(),
        items: Joi.string().min(2).max(200).required(),
        numberOfItems: Joi.number().min(0).max(200).required(),
        vendor: Joi.string().required(),
        description: Joi.string().required(),
        category: Joi.string().required(),
        department: Joi.string().required(),
        dueDate: Joi.date().min('now').iso().required(),
        amount: Joi.number().min(0).required(),
        comment: Joi.string().allow()
    };
    return Joi.validate(ticket, schema);
}

function validateTicketListGet(ticket) {
    const schema = {
        item: Joi.string().min(2).max(200).required(),
        reference: Joi.number().required(),
        userId: Joi.required(),
        phaseid: Joi.required(),
        workflowId: Joi.required(),
        categoryId: Joi.required(),
        status: Joi.string().valid(["open", "closed", "blocked"])
    };
    return Joi.validate(ticket, schema);
}

async function analyzeTicket( category, vendor, amount, dueDate, ref ) {

    const payload = {
        ref_match: false,
        category_match: false,
        vendor_match: false,
        department_match: false,
        amount_match: false,
        dueDate_match: false,
        score: 0
    };

    let ticketExists = await Ticket.findOne({ ref });

    if (ticketExists) {
        payload.ref_match = true;
        payload.score = 100;
        return payload;
    }

    let ticketMatchExists = await Ticket.findOne({ category, vendor, amount, dueDate });

    if (ticketMatchExists) {
        payload.category_match = true;
        payload.vendor_match = true;
        payload.amount_match = true;
        payload.dueDate_match = true;
        payload.score = 100;
        return payload;
    }

    let duplicateTicket = await Ticket.findOne({
        $or: [{ category }, { vendor }], amount, dueDate
    });

    if (duplicateTicket) {
        payload.vendor_match = true;
        payload.amount_match = true;
        payload.dueDate_match = true;
        payload.score = 75;
        return payload;
    }

    let possibleDuplicateTicket = await Ticket.findOne({
        $or: [{ category }, { vendor }, { dueDate }], amount
    });

    if (possibleDuplicateTicket) {
        payload.dueDate_match = true;
        payload.amount_match = true;
        payload.score = 50;
        return payload;
    }

    return payload;
}


module.exports.Ticket = Ticket;
module.exports.TicketAudit = TicketAudit;
module.exports.validateTicketListGet = validateTicketListGet;
module.exports.validateTicketPost = validateTicketPost;
module.exports.validateTicketPatch = validateTicketPatch;
module.exports.analyzeTicket = analyzeTicket;
