const { PHASE_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Phase, validatePhasePost, validatePhasePatch } = require("../models/phase");
const { adminAuth } = require("../middleware/auth");


// Get  Single Phase
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        phase = await Phase.findById(id)
        .populate({
            path: 'approver'
        });
        if(!phase) return response.error(res, "Phase not found");
        console.log(phase);
        return response.withData(res, phase);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});



// Get Phase List
router.get("/", async (req, res) => {

    try {
        phaseList = await Phase.find({})
        .populate({
            path: 'approver'
        });
        console.log(phaseList);
        return response.withData(res, phaseList);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Create phase
router.post("/", adminAuth, async (req, res) => {
    const { error } = validatePhasePost(req.body);
    if (error) return response.error(res, error.details[0].message); 

    const { name, phaseType, approver, sla, isDynamic } = req.body;

    try {
        let phaseExists = await Phase.findOne({ name });
        if (phaseExists) {
            return response.error(res, PHASE_CONSTANTS.PHASE_EXISTS);
        }

        phase = await Phase.create({ name, phaseType, approver, sla, isDynamic });
        return response.success(res, PHASE_CONSTANTS.PHASE_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Update a phase
router.patch("/:id", adminAuth, async (req, res) => {
    const { error } = validatePhasePatch(req.body);
    if (error) return response.error(res, error.details[0].message); 
    
    const { id } = req.params;
    
    const { name, phaseType, approver, sla, isDynamic } = req.body;
    
    try {
        let phaseExists = await Phase.findById(id);
        if (!phaseExists) return response.error(res, PHASE_CONSTANTS.PHASE_NOT_FOUND);

        phase = await phaseExists.updateOne({ name, phaseType, approver, sla, isDynamic });
        return response.success(res, PHASE_CONSTANTS.PHASE_UPDATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});

// Delete phase
router.delete("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        let phaseExists = await Phase.findById(id);
        if (!phaseExists) return response.error(res, PHASE_CONSTANTS.PHASE_NOT_FOUND);

        phase = await Phase.deleteOne({ _id: id });
        return response.success(res, PHASE_CONSTANTS.PHASE_DELETED);
    } catch (error) {
        return response.error(res, error.message);
    }
});



module.exports = router;
