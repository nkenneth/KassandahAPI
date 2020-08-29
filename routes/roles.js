const { ROLE_CONSTANTS } = require("../config/constant");
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const router = express.Router();
const { Role, RoleAudit, validateRolePost } = require("../models/role");
const { userAuth } = require("../middleware/auth");

// Get Role List
router.get("/", async (req, res) => {
    let criteria = {};

    let roleList = await Role.aggregate([
        { $match: { status: "active" } },
        {
            $project: {
                _id: 0,
                roleId: "$_id",
                role: 1,
                status: 1,
                isState: 1,
                permissions: 1,
                isState: 1,
                createdBy: 1,
                modifiedBy: 1,
                modifiedDate: 1,
                insertDate: 1
            }
        }
    ]);

    return res.send({ statusCode: 200, message: "Success", data: { roleList } });
});

// Get Role Audit Log
router.get("/auditLog/:roleId", async (req, res) => {
    let criteria = {};
    criteria.roleId = req.params.roleId;

    var skipVal, limitVal;
    if (isNaN(parseInt(req.query.offset))) skipVal = 0;
    else skipVal = parseInt(req.query.offset);

    if (isNaN(parseInt(req.query.limit))) limitVal = 100;
    else limitVal = parseInt(req.query.limit);

    let auditLog = await RoleAudit.aggregate([
        { $match: criteria },
        { $sort: { modifiedDate: -1 } },
        {
            $project: {
                _id: 0,
                role: 1,
                isState: 1,
                permissions: 1,
                status: 1,
                createdBy: 1,
                modifiedBy: 1,
                modifiedDate: 1
            }
        }
    ]);

    return res.send({ statusCode: 200, message: "Success", data: { auditLog } });
});

// Create a role
router.post("/", userAuth, async (req, res) => {
    const { error } = validateRolePost(req.body);
    if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

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
    role.isState = req.body.isState;
    role.permissions = req.body.permissions;
    if (req.body.status)
        role.status = req.body.status;

    role.createdBy = req.jwtData.email;
    role.modifiedDate = Math.round(new Date() / 1000);
    await role.save();
    return res.send({ statusCode: 200, status: "Success", data: ROLE_CONSTANTS.SUBMIT_SUCCESS });
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
