const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const TicketSchema = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    phaseId: { type: mongoose.Schema.Types.ObjectId, ref: "phase", required: true },
    workflowId: { type: mongoose.Schema.Types.ObjectId, ref: "workflow", required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
    status:{type: String, default: ""}
})

const Ticket = mongoose.model("Ticket", TicketSchema);


module.exports.Ticket = Ticket;
