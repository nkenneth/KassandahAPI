const Joi = require("joi");
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role: String,
    status: { type: String, enum: ["active", "inactive"], default: "active" }
}, { timestamps: true });

const Role = mongoose.model("role", roleSchema);

function validateRolePost(role) {
    const schema = {
        role: Joi.string().required(),
        status: Joi.string().valid(["active", "inactive"])
    };
    return Joi.validate(role, schema);
}

function validateRolePut(role) {
    const schema = {
        role: Joi.string().required(),
        status: Joi.string().valid(["active", "inactive"])
    };
    return Joi.validate(role, schema);
}

exports.Role = Role;
exports.validateRolePost = validateRolePost;