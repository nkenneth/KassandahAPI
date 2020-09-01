const { ROLE_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const response = require("../services/response");
const router = express.Router();
const { Role, RoleAudit, validateRolePost } = require("../models/role");
const { adminAuth } = require("../middleware/auth");


// Get  Single Role
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    role = await Role.findById(id);
    console.log(role);
    return response.withData(res, role);
});



// Get Role List
router.get("/", async (req, res) => {
    roleList = await Role.find({});
    console.log(roleList);
    return response.withData(res, roleList);
});


// Create a role
router.post("/", adminAuth, async (req, res) => {
    const { error } = validateRolePost(req.body);
    if (error) return response.error(res, error.details[0].message); 

    let role = await Role.findOne({ role: req.body.role });
    if (role) {
        await logCurrentRoleState(role);
        role.permissions = req.body.permissions || role.permissions
        role.status = req.body.status || role.status;
        if (req.body.isState == true || req.body.isState == false)
            role.isState = req.body.isState;
        role.modifiedBy = req.jwtData.email;
        role.modifiedDate = Math.round(new Date() / 1000);
        await role.save();
        return res.send({ statusCode: 200, status: "Success", data: ROLE_CONSTANTS.UPDATE_SUCCESS });
    }

    role = new Role();
    role.role = req.body.role;
    if (req.body.status)
        role.status = req.body.status;

    role.createdBy = req.jwtData.email;
    role.modifiedDate = Math.round(new Date() / 1000);
    await role.save();
    return response.success(res, ROLE_CONSTANTS.SUBMIT_SUCCESS);
    // return res.send({ statusCode: 200, status: "Success", data: ROLE_CONSTANTS.SUBMIT_SUCCESS });
});

async function logCurrentRoleState(role) {
    let auditRole = new RoleAudit({
        roleId: role._id.toString(),
        role: role.role,
        permissions: role.permissions,
        isState: role.isState,
        status: role.status,
        createdBy: role.createdBy,
        modifiedBy: role.modifiedBy,
        modifiedDate: role.modifiedDate
    })

    await auditRole.save()
}

module.exports = router;
