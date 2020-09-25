const mongoose = require("mongoose");
const Joi = require("joi");



const DocumentSchema = new mongoose.Schema({
    ticket: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket" },
    document: { type: String, required: true }
}, { timestamps: true });

const Document = mongoose.model("Document", DocumentSchema);


module.exports.Document = Document;
