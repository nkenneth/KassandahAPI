const { CATEGORY_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Category, validateCategoryPost, validateCategoryPatch } = require("../models/category");
const { adminAuth } = require("../middleware/auth");


// Get  Single Category
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        category = await Category.findById(id)
        .populate({
            path: 'workflow'
        });
        if(!category) return response.error(res, "Category not found");
        console.log(category);
        return response.withData(res, category);
    } catch (error) {
        return response.error(res, error.message);
    }

});



// Get Category List
router.get("/", async (req, res) => {

    try {
        categoryList = await Category.find({})
        .populate({
            path: 'workflow'
        });
        console.log(categoryList);
        return response.withData(res, categoryList);
    } catch (error) {
        return response.error(res, error.message);
    }

});


// Create category
router.post("/", adminAuth, async (req, res) => {
    const { error } = validateCategoryPost(req.body);
    if (error) return response.error(res, error.details[0].message);

    const { name, description, workflow } = req.body;

    try {
        let categoryExists = await Category.findOne({ name });
        if (categoryExists) {
            return response.error(res, CATEGORY_CONSTANTS.CATEGORY_EXISTS);
        }

        category = await Category.create({ name, description, workflow });
        return response.success(res, CATEGORY_CONSTANTS.CATEGORY_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }

});


// Update a category
router.patch("/:id", adminAuth, async (req, res) => {
    const { error } = validateCategoryPatch(req.body);
    if (error) return response.error(res, error.details[0].message);
    const { id } = req.params;
    const { name, description, workflow } = req.body;

    try {
        let categoryExists = await Category.findById(id);
        if (!categoryExists) return response.error(res, CATEGORY_CONSTANTS.CATEGORY_NOT_FOUND);

        category = await categoryExists.updateOne({ name, description, workflow });
        return response.success(res, CATEGORY_CONSTANTS.CATEGORY_UPDATED);

    } catch (error) {
        return response.error(res, error.message);
    }

});

// Delete category
router.delete("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        let categoryExists = await Category.findById(id);
        if (!categoryExists) return response.error(res, CATEGORY_CONSTANTS.CATEGORY_NOT_FOUND);

        category = await Category.deleteOne({ _id: id });
        return response.success(res, CATEGORY_CONSTANTS.CATEGORY_DELETED);
    } catch (error) {
        return response.error(res, error.message);
    }
});



module.exports = router;
