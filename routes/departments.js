const { DEPARTMENT_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Department, validateDepartmentPost, validateDepartmentPatch } = require("../models/department");
const { adminAuth } = require("../middleware/auth");


// Get  Single Department
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        department = await Department.findById(id)
        .populate({
            path: 'hod deputyhod'
        });
        if(!department) return response.error(res, "Department not found");
        console.log(department);
        return response.withData(res, department);
    } catch (error) {
        return response.error(res, error);
    }

});

// Get Department List
router.get("/", async (req, res) => {

    try {
        departmentList = await Department.find({})
        .populate({
            path: 'hod deputyhod'
        });
        console.log(departmentList);
        return response.withData(res, departmentList);
    } catch (error) {
        return response.error(res, error);
    }

});


// Create department
router.post("/", adminAuth, async (req, res) => {
    const { error } = validateDepartmentPost(req.body);
    if (error) return response.error(res, error.details[0].message);

    const { name, hod, deputyhod, description } = req.body;

    try {
        let departmentExists = await Department.findOne({ name });
        if (departmentExists) {
            return response.error(res, DEPARTMENT_CONSTANTS.DEPARTMENT_EXISTS);
        }

        department = await Department.create({ name, hod, deputyhod, description });
        return response.success(res, DEPARTMENT_CONSTANTS.DEPARTMENT_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }

});


// Update a department
router.patch("/:id", adminAuth, async (req, res) => {
    const { error } = validateDepartmentPatch(req.body);
    if (error) return response.error(res, error.details[0].message);

    const { id } = req.params;
    const { name, description, hod, deputyhod } = req.body;

    try {
        let departmentExists = await Department.findById(id);
        if (!departmentExists) return response.error(res, DEPARTMENT_CONSTANTS.DEPARTMENT_NOT_FOUND);

        department = await departmentExists.updateOne({ name, description, hod, deputyhod });
        return response.success(res, DEPARTMENT_CONSTANTS.DEPARTMENT_UPDATED);

    } catch (error) {
        return response.error(res, error.message);
    }

});


// Delete department
router.delete("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        let departmentExists = await Department.findById(id);
        if (!departmentExists) return response.error(res, DEPARTMENT_CONSTANTS.DEPARTMENT_NOT_FOUND);

        department = await Department.deleteOne({ _id: id });
        return response.success(res, DEPARTMENT_CONSTANTS.DEPARTMENT_DELETED);
    } catch (error) {
        return response.error(res, error.message);
    }
});

module.exports = router;
