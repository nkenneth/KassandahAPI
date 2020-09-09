const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");


const TicketSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    ref: { type: String, required: true },
    ticketRef: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "department", required: true },
    vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "vendor", required: true },
    items: { type: String, required: true },
    numberOfItems: { type: Number,  required: true },
    description: { type: String, default: "", required: true },
    dueDate: { type: Date, required: true },
    amount: { type: Number,  required: true},
    phaseId: { type: mongoose.Schema.Types.ObjectId, ref: "phase", required: true },
    workflowId: { type: mongoose.Schema.Types.ObjectId, ref: "workflow", required: true },
    isPossibleDuplicate: { type: Boolean, default: false },
    status: { type: String, enum: ["open", "closed", "approved", "rejected", "pending"] },
    creationDate: { type: Date, default: () => { return new Date(); } },
    insertDate: { type: Number, default: () => { return Math.round(new Date() / 1000); } }
})

const Ticket = mongoose.model("Ticket", TicketSchema);

function validateTicketPost(ticket) {
    const schema = {
        ref: Joi.string().min(2).max(200).required(),
        items: Joi.string().min(2).max(200).required(),
        numberOfItems: Joi.number().min(2).max(200).required(),
        vendorId: Joi.string().required(),
        categoryId: Joi.string().required(),
        departmentId: Joi.string().required(),
        dueDate: Joi.date().min('now').iso().required(),
        workflowId: Joi.string().required(),
    };
    return Joi.validate(ticket, schema);
}

function validateTicketPut(ticket) {
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

async function analyzeTicket( categoryId, vendorId, amount, dueDate, ref ) {
    
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
    
    let duplicateTicket = await Ticket.findOne({ categoryId, vendorId, amount, dueDate });

    if (duplicateTicket) {
        payload.category_match = true;
        payload.vendor_match = true;
        payload.amount_match = true;
        payload.dueDate_match = true;
        payload.score = 100; 
        return payload;
    }


    let possibleDuplicateTicket = await Ticket.findOne({
        $or: [{ categoryId }, { vendorId }], amount, dueDate
    });

    if (possibleDuplicateTicket) {
        payload.vendor_match = true;
        payload.amount_match = true;
        payload.dueDate_match = true;
        payload.score = 75; 
        return payload;
    }

    let checkTicket = await Ticket.findOne({
        $or: [{ categoryId }, { vendorId }, { dueDate }], amount
    });

    if (checkTicket) {
        payload.dueDate_match = true;
        payload.amount_match = true;
        payload.score = 50; 
        return payload;
    }


}


module.exports.Ticket = Ticket;
module.exports.validateTicketListGet = validateTicketListGet;
module.exports.validateTicketPost = validateTicketPost;
module.exports.validateTicketPut = validateTicketPut;
module.exports.analyzeTicket = analyzeTicket;
