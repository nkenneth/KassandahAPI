const { WORKFLOW_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Workflow, validateWorkflowPost, validateWorkflowPatch } = require("../models/workflow");
const { adminAuth } = require("../middleware/auth");


// Get  Single Workflow
router.get("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        workflow = await Workflow.findById(id);
        console.log(workflow);
        return response.withData(res, workflow);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});



// Get Workflow List
router.get("/", adminAuth, async (req, res) => {

    try {
        workflowList = await Workflow.find({});
        console.log(workflowList);
        return response.withData(res, workflowList);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Create workflow
router.post("/", adminAuth, async (req, res) => {
    const { error } = validateWorkflowPost(req.body);
    if (error) return response.error(res, error.details[0].message); 

    const { name, description, phases } = req.body;

    try {
        let workflowExists = await Workflow.findOne({ name });
        if (workflowExists) {
            return response.error(res, WORKFLOW_CONSTANTS.WORKFLOW_EXISTS);
        }

        workflow = await Workflow.create({ name, description, phases });
        return response.success(res, WORKFLOW_CONSTANTS.WORKFLOW_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Update a workflow
router.patch("/:id", adminAuth, async (req, res) => {
    const { error } = validateWorkflowPatch(req.body);
    if (error) return response.error(res, error.details[0].message); 
    
    const { id } = req.params;
    
    const { name, user, sla, isDynamic } = req.body;
    
    try {
        let workflowExists = await Workflow.findById(id);
        if (!workflowExists) return response.error(res, WORKFLOW_CONSTANTS.WORKFLOW_NOT_FOUND);

        workflow = await Workflow.updateOne({ name, user, sla, isDynamic });
        return response.success(res, WORKFLOW_CONSTANTS.WORKFLOW_UPDATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});

// Delete workflow
router.delete("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        let workflowExists = await Workflow.findById(id);
        if (!workflowExists) return response.error(res, WORKFLOW_CONSTANTS.WORKFLOW_NOT_FOUND);

        workflow = await Workflow.deleteOne({ _id: id });
        return response.success(res, WORKFLOW_CONSTANTS.WORKFLOW_DELETED);
    } catch (error) {
        return response.error(res, error.message);
    }
});



module.exports = router;
