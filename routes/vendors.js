const { VENDOR_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Vendor, validateVendorPost, validateVendorPatch } = require("../models/vendor");
const { adminAuth } = require("../middleware/auth");


// Get  Single Vendor
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        vendor = await Vendor.findById(id);
        if(!vendor) return response.error(res, "Vendor not found");
        console.log(vendor);
        return response.withData(res, vendor);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});



// Get Vendor List
router.get("/", async (req, res) => {

    try {
        vendorList = await Vendor.find({});
        console.log(vendorList);
        return response.withData(res, vendorList);
    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Create vendor
router.post("/", adminAuth, async (req, res) => {
    const { error } = validateVendorPost(req.body);
    if (error) return response.error(res, error.details[0].message); 

    const { name, address, state, email, phone } = req.body;

    try {
        let vendorExists = await Vendor.findOne({ $or: [{ name }, {email}, {phone}]  });
        if (vendorExists) {
            return response.error(res, VENDOR_CONSTANTS.VENDOR_EXISTS);
        }

        vendor = await Vendor.create({ name, address, state, email, phone });
        return response.success(res, VENDOR_CONSTANTS.VENDOR_CREATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Update a vendor
router.patch("/:id", adminAuth, async (req, res) => {
    const { error } = validateVendorPatch(req.body);
    if (error) return response.error(res, error.details[0].message); 
    
    const { id } = req.params;
    const { name } = req.body;

    try {
        let vendorExists = await Vendor.findById(id);
        if (!vendorExists) return response.error(res, VENDOR_CONSTANTS.VENDOR_NOT_FOUND);

        vendor = await vendorExists.updateOne({ name });
        return response.success(res, VENDOR_CONSTANTS.VENDOR_UPDATED);

    } catch (error) {
        return response.error(res, error.message);
    }
    
});


// Delete vendor
router.delete("/:id", adminAuth, async (req, res) => {
    const { id } = req.params;
    try {
        let vendorExists = await Vendor.findById(id);
        if (!vendorExists) return response.error(res, VENDOR_CONSTANTS.VENDOR_NOT_FOUND);

        vendor = await Vendor.deleteOne({ _id: id });
        return response.success(res, VENDOR_CONSTANTS.VENDOR_DELETED);
    } catch (error) {
        return response.error(res, error.message);
    }
});



module.exports = router;
