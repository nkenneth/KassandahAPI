const mongoose = require("mongoose")
const Joi = require("joi");

const CommentSchema = new mongoose.Schema({
    ticket: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    comment: { type: String, default:"" }
}, { timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);

module.exports.Comment = Comment;
