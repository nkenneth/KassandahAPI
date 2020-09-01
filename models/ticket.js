const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const TicketSchema = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    code: {type: Number, default: 0},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    phaseId: { type: mongoose.Schema.Types.ObjectId, ref: "phase", required: true },
    workflowId: { type: mongoose.Schema.Types.ObjectId, ref: "workflow", required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
    status:{type: String, enum: ["open", "closed", "blocked"], default: "open"},
    creationDate: { type: Date, default: () => { return new Date(); } },
    insertDate: { type: Number, default: () => { return Math.round(new Date() / 1000); } }
})

const Ticket = mongoose.model("Ticket", TicketSchema);

function validateTicketPost(ticket) {
    const schema = {
        name: Joi.string().min(2).max(200).required(),
        userId: Joi.required(),
        phaseid: Joi.required(),
        workflowId: Joi.required(),
        categoryId: Joi.required()
    };
    return Joi.validate(ticket, schema);
}

function validateTicketPut(ticket) {
    const schema = {
        name: Joi.string().min(2).max(200).required(),
        code: Joi.number().required(),
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
        name: Joi.string().min(2).max(200).required(),
        code: Joi.number().required(),
        userId: Joi.required(),
        phaseid: Joi.required(),
        workflowId: Joi.required(),
        categoryId: Joi.required(),
        status: Joi.string().valid(["open", "closed", "blocked"])
    };
    return Joi.validate(ticket, schema);
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
module.exports.Ticket = Ticket;
module.exports.getRandomString = getRandomString;
module.exports.validateTicketListGet = validateTicketListGet;
module.exports.validateTicketPost = validateTicketPost;
module.exports.validateTicketPut = validateTicketPut;
