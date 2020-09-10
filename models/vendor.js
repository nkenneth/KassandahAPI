const mongoose = require("mongoose");
const Joi = require("joi");


const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String },
    phone: { type: String }
});

const Vendor = mongoose.model("Vendor", VendorSchema);


function validateVendorPost(vendor) {
    const schema = {
        name: Joi.string().required(),
        address: Joi.string().required(),
        state: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required()
    };
    
    return Joi.validate(vendor, schema);
}


function validateVendorPatch(vendor) {
    const schema = {
        name: Joi.string(),
        address: Joi.string(),
        state: Joi.string(),
        email: Joi.string(),
        phone: Joi.string()
    };
    
    return Joi.validate(vendor, schema);
}


module.exports.Vendor = Vendor;
module.exports.validateVendorPost = validateVendorPost;
module.exports.validateVendorPatch = validateVendorPatch;