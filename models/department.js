const mongoose = require("mongoose");
const Joi = require("joi");


const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hod: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    deputyhod: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String }
}, { timestamps: true });

const Department = mongoose.model("Department", DepartmentSchema);


function validateDepartmentPost(department) {
    const schema = {
        name: Joi.string().required(),
        hod: Joi.string().required(),
        deputyhod: Joi.string(),
        description: Joi.string()
    };
    return Joi.validate(department, schema);
}


function validateDepartmentPatch(department) {
    const schema = {
        name: Joi.string().required(),
        hod: Joi.string().required(),
        deputyhod: Joi.string(),
        description: Joi.string()
    };
    return Joi.validate(department, schema);
}


module.exports.Department = Department;
module.exports.validateDepartmentPost = validateDepartmentPost;
module.exports.validateDepartmentPatch = validateDepartmentPatch;
