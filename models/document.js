const mongoose = require("mongoose");
const Joi = require("joi");



const DocumentSchema = new mongoose.Schema({
    ticketId: { type: mongoose.Schema.Types.ObjectId, ref: "ticket" },
    document: { type: String, required: true }
}, {timestamps: true});

const Document = mongoose.model("Document", DocumentSchema);


module.exports.Document = Document;
