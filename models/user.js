const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const { Role } = require("../models/role");

const UserSchema = new mongoose.Schema({
    userId: String,
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true }],
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    phone: { type: String, unique: true },
    email: { type: String, default: "", required: true, unique: true },
    password: { type: String, default: "" },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    isVerified: { type: Boolean, default: false },
    accessToken: { type: String, default: "" },
    refreshToken: { type: String, default: "" },
    status: { type: String, enum: ["active", "inactive", "blocked"], default: "inactive" },
    profilePic: { type: String, default: "" },
    modifiedDate: Number,
    lastLogin: { type: Date }
    // lastLogin: Number,
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

const userAuditSchema = new mongoose.Schema({
    userId: String,
    role: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    status: String,
    profilePic: String,
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Number,
    lastLogin: Number
});

const UserAudit = mongoose.model("Useraudit", userAuditSchema);

function validateUserPost(user) {
    const schema = {
        firstName: Joi.string().min(2).max(200).required(),
        lastName: Joi.string().min(2).max(200).required(),
        password: Joi.string().min(6).max(20).required(),
        email: Joi.string().email().required(),
        phone: Joi.string()
    };
    return Joi.validate(user, schema);
}

function validateEmail(user) {
    const schema = {
        email: Joi.string().email().required()
    };
    return Joi.validate(user, schema);
}

function validateUserPut(user) {
    const schema = {
        userId: Joi.string().min(1).max(200),
        role: Joi.string(),
        firstName: Joi.string().min(2).max(200),
        lastName: Joi.string().min(2).max(200),
        email: Joi.string().email(),
        phone: Joi.string(),
        deviceToken: Joi.string().min(1).max(200),
        profilePic: Joi.string().min(1).max(200).allow(""),
        status: Joi.string().valid(["active", "inactive", "blocked"])
    };
    return Joi.validate(user, schema);
}

function validateUserListGet(user) {
    const schema = {
        role: Joi.string(),
        email: Joi.string().email(),
        fullName: Joi.string().min(1).max(200),
        phone: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        status: Joi.any().valid(["active", "blocked", "suspended"])
    };
    return Joi.validate(user, schema);
}

function validateUserLogin(rso) {
    const schema = {
        email: Joi.string().min(6).max(200).required(),
        password: Joi.string().min(6).max(200).required(),
    };
    return Joi.validate(rso, schema);
}

function validateChangePassword(user) {
    const schema = {
        oldPassword: Joi.string().min(1).max(200).required(),
        newPassword: Joi.string().min(1).max(200).required(),
    };
    return Joi.validate(user, schema);
}

function validateResetPassword(user) {
    const schema = {
        newPassword: Joi.string().min(6).max(200).required(),
        confirmNewPassword: Joi.string().min(6).max(200).required()
    };
    return Joi.validate(user, schema);
}

function validateRefreshToken(user) {
    const schema = {
        refreshToken: Joi.string().min(32).max(1000).required()
    };
    return Joi.validate(user, schema);
}



module.exports.User = User;
module.exports.UserAudit = UserAudit;
module.exports.validateUserPost = validateUserPost;
module.exports.validateUserPut = validateUserPut;
module.exports.validateEmail = validateEmail;
module.exports.validateUserListGet = validateUserListGet;
module.exports.validateUserLogin = validateUserLogin;
module.exports.validateChangePassword = validateChangePassword;
module.exports.validateResetPassword = validateResetPassword;
module.exports.validateRefreshToken = validateRefreshToken;
