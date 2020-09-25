const mongoose = require("mongoose")
const Joi = require("joi");


const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    workflow: { type: mongoose.Schema.Types.ObjectId, ref: "Workflow" }
}, { timestamps: true });

const Category = mongoose.model("Category", CategorySchema);

function validateCategoryPost(category) {
    const schema = {
        name: Joi.string().required(),
        workflow: Joi.string().required()
    };
    return Joi.validate(category, schema);
}

function validateCategoryPatch(category) {
    const schema = {
        name: Joi.string().required(),
        workflow: Joi.string().required()
    };
    return Joi.validate(category, schema);
}


module.exports.Category = Category;
module.exports.validateCategoryPost = validateCategoryPost;
module.exports.validateCategoryPatch = validateCategoryPatch;
