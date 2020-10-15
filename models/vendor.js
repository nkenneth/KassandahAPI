const mongoose = require("mongoose");
const Joi = require("joi");


const VendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    bank: { type: String },
    accountName: { type: String },
    accountNumber: { type: String },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const Vendor = mongoose.model("Vendor", VendorSchema);


function validateVendorPost(vendor) {
    const schema = {
        name: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        email: Joi.string().allow(""),
        phone: Joi.string().required(),
        bank: Joi.string().allow(""),
        accountName: Joi.string().allow(""),
        accountNumber: Joi.string().allow(""),
        isVerified: Joi.boolean()
    };
    
    return Joi.validate(vendor, schema);
}


function validateVendorPatch(vendor) {
    const schema = {
        name: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        email: Joi.string().allow(""),
        phone: Joi.string().required(),
        bank: Joi.string().allow(""),
        accountName: Joi.string().allow(""),
        accountNumber: Joi.string().allow(""),
        isVerified: Joi.boolean()
    };
    
    return Joi.validate(vendor, schema);
}


module.exports.Vendor = Vendor;
module.exports.validateVendorPost = validateVendorPost;
module.exports.validateVendorPatch = validateVendorPatch;