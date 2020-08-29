const Joi = require("joi");
const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    role: String,
    permissions: {
        roles: String,
        users: String,
        reports: String
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Number,
    creationDate: { type: Date, default: () => { return new Date(); } },
    insertDate: { type: Number, default: () => { return Math.round(new Date() / 1000); } }
});

const Role = mongoose.model("role", roleSchema);

const roleAuditSchema = new mongoose.Schema({
    roleId: String,
    role: String,
    permissions: {
        roles: String,
        users: String,
        reports: String
    },
    status: String,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Number
});

const RoleAudit = mongoose.model("roleaudit", roleAuditSchema);

function validateRolePost(role) {
    const schema = {
        role: Joi.string().required(),
        permissions: Joi.object({
            roles: Joi.string().valid(["R", "W", "H"]).required(),
            users: Joi.string().valid(["R", "W", "H"]).required(),
            reports: Joi.string().valid(["R", "W", "H"]).required()
        }).required(),
        status: Joi.string().valid(["active", "inactive"])
    };
    return Joi.validate(role, schema);
}

exports.Role = Role;
exports.RoleAudit = RoleAudit;
exports.validateRolePost = validateRolePost;