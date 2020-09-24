const mongoose = require("mongoose")
const Joi = require("joi");

const CommentSchema = new mongoose.Schema({
    ticket: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket", required: true }]
    comment: { type: String, default:"", required: true },
}, { timestamps: true });

const Workflow = mongoose.model("Workflow", WorkflowSchema);

function validateWorkflowPost(phase) {
    const schema = {
        name: Joi.string().required(),
        description: Joi.string(),
        phases: Joi.array().items(Joi.string().required())

    };
    return Joi.validate(phase, schema);
}

module.exports.Workflow = Workflow;
module.exports.validateWorkflowPost = validateWorkflowPost;