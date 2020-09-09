const { CATEGORY_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Category, validateCategoryPost } = require("../models/category");
const { adminAuth } = require("../middleware/auth");


// Get  Single Category
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        category = await Category.findById(id);
        console.log(category);
        return response.withData(res, category);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});



// Get Category List
router.get("/", async (req, res) => {

    try {
        categoryList = await Category.find({});
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

    const { name } = req.body;

    try {
        let categoryExists = await Category.findOne({ name });
        if (categoryExists) {
            return response.error(res, CATEGORY_CONSTANTS.CATEGORY_EXISTS);
        }

        category = await Category.create({ name });
        return response.success(res, CATEGORY_CONSTANTS.CATEGORY_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});



module.exports = router;
