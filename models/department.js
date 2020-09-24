const mongoose = require("mongoose");
const Joi = require("joi");


const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hod: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    deputyhod: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    description: { type: String, required: true }
}, { timestamps: true });

const Department = mongoose.model("Department", DepartmentSchema);


function validateDepartmentPost(department) {
    const schema = {
        name: Joi.string().min(1).max(200).required(),
        hod: Joi.string().min(1).max(200).required(),
        description: Joi.string().required()
    };
    return Joi.validate(department, schema);
}


function validateDepartmentPatch(department) {
    const schema = {
        name: Joi.string().required(),
        hod: Joi.string().required(),
        description: Joi.string()
    };
    return Joi.validate(department, schema);
}


module.exports.Department = Department;
module.exports.validateDepartmentPost = validateDepartmentPost;
module.exports.validateDepartmentPatch = validateDepartmentPatch;
