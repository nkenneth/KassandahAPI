const mongoose = require("mongoose");
const Joi = require("joi");


const PhaseSchema = new mongoose.Schema({
    name: { type: String, default: "", required: true },
    approver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sla: { type: Number, default: 3 },
    phaseType: { type: String, enum: ["transit", "end"], required: true },
    isDynamic: { type: Boolean, default: true, required: true }
}, { timestamps: true } )

const Phase = mongoose.model("Phase", PhaseSchema);

function validatePhasePost(phase) {
    const schema = {
        name: Joi.string().required(),
        phaseType: Joi.string().required(),
        approver: Joi.string(),
        sla: Joi.number(),
        isDynamic: Joi.boolean().required()
    };
    return Joi.validate(phase, schema);
}

function validatePhasePatch(phase) {
    const schema = {
        name: Joi.string().required(),
        phaseType: Joi.string().required(),
        approver: Joi.string(),
        sla: Joi.number(),
        isDynamic: Joi.boolean().required()
    };
    return Joi.validate(phase, schema);
}

module.exports.Phase = Phase;
module.exports.validatePhasePost = validatePhasePost;
module.exports.validatePhasePatch = validatePhasePatch;