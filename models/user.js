const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const UserSchema = new mongoose.Schema({
    userId: String,
    role: String,
    fullName: { type: String, default: "" },
    mobile: { type: String, default: "", required: true, unique: true },
    email: { type: String, default: "-", required: true, unique: true },
    password: { type: String, default: "" },
    stateId: Number,
    address: String,
    deviceToken: { type: String, default: "" },
    version: { type: String, default: "" },
    accessToken: { type: String, default: "" },
    status: { type: String, enum: ["active", "inactive", "blocked"] },
    profilePic: { type: String, default: "" },
    createdBy: String,
    modifiedBy: String,
    modifiedDate: Number,
    lastLogin: Number,
    lastActivityTime: { type: Number, default: () => { return Math.round(new Date() / 1000); } },
    creationDate: { type: Date, default: () => { return new Date(); } },
    insertDate: { type: Number, default: () => { return Math.round(new Date() / 1000); } }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        {
            userId: this._id,
            email: this.email,
            role: "user",
            subRole: this.role
        },
        config.get("jwtPrivateKey")
    );
    return token;
};

const User = mongoose.model("User", UserSchema);


const userAuditSchema = new mongoose.Schema({
    userId: String,
    role: String,
    fullName: String,
    mobile: String,
    email: String,
    stateId: Number,
    address: String,
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
        role: Joi.string().required(),
        fullName: Joi.string().min(1).max(200).required(),
        password: Joi.string().min(6).max(20).required(),
        email: Joi.string().email().required(),
        mobile: Joi.string().required(),
        address: Joi.string(),
        stateId: Joi.number(),
        deviceToken: Joi.string().min(1).max(200),
        profilePic: Joi.string().min(1).max(300).allow("")
    };
    return Joi.validate(user, schema);
}

function validateUserPut(user) {
    const schema = {
        userId: Joi.string().min(1).max(200),
        role: Joi.string(),
        fullName: Joi.string().min(1).max(200),
        email: Joi.string().email(),
        mobile: Joi.string(),
        address: Joi.string(),
        stateId: Joi.number(),
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
        mobile: Joi.string(),
        startDate: Joi.string(),
        endDate: Joi.string(),
        status: Joi.any().valid(["active", "blocked", "suspended"])
    };
    return Joi.validate(user, schema);
}

function validateUserLogin(rso) {
    const schema = {
        email: Joi.string().min(1).max(200),
        password: Joi.string().min(1).max(200),
    };
    return Joi.validate(rso, schema);
}

function validateChangePassword(rso) {
    const schema = {
        oldPassword: Joi.string().min(1).max(200).required(),
        newPassword: Joi.string().min(1).max(200).required(),
    };
    return Joi.validate(rso, schema);
}

function validateResetAdminPassword(rso) {
    const schema = {
        rsoId: Joi.string().min(5).max(100).required(),
        newPassword: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(rso, schema);
}

module.exports.User = User;
module.exports.UserAudit = UserAudit;
module.exports.validateUserPost = validateUserPost;
module.exports.validateUserPut = validateUserPut;
module.exports.validateUserListGet = validateUserListGet;
module.exports.validateUserLogin = validateUserLogin;
module.exports.validateChangePassword = validateChangePassword;
module.exports.validateResetAdminPassword = validateResetAdminPassword;