const mongoose = require("mongoose")
const Joi = require("joi");

const WorkflowSchema = new mongoose.Schema({
    name: { type: String, default:"", required: true },
    description: { type: String, default:""},
    phases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Phase", required: true }]
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

function validateWorkflowPatch(phase) {
    const schema = {
        name: Joi.string().required(),
        description: Joi.string(),
        phases: Joi.array().items(Joi.string().required())

    };
    return Joi.validate(phase, schema);
}

module.exports.Workflow = Workflow;
module.exports.validateWorkflowPost = validateWorkflowPost;
module.exports.validateWorkflowPatch = validateWorkflowPatch;