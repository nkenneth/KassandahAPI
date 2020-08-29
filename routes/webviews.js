const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const fs = require("fs");
const express = require("express");
const router = express.Router();

const { Webview, validateWebviewPost, validateWebviewGet } = require("../models/webview");
const { adminAuth } = require("../middleware/auth");

router.get("/admin", adminAuth, async (req, res) => {
    const { error } = validateWebviewGet(req.query);
    if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

    var webview = await Webview.aggregate([{ $match: { status: req.query.status } }]);
    return res.send({ statusCode: 200, message: "Success", data: webview[0].text });
});

router.post("/", adminAuth, async (req, res) => {
    const { error } = validateWebviewPost(req.body);
    if (error) return res.status(400).send({ statusCode: 400, message: "Failure", data: error.details[0].message });

    let valueText = await Webview.findOne({ status: req.body.status });
    if (valueText) {
        await Webview.updateOne({ status: req.body.status }, { $set: { text: req.body.text } });
    } else {
        valueText = new Webview({ status: req.body.status, text: req.body.text });
        valueText.save();
    }

    return res.send({ statusCode: 200, message: "Success", data: "Webview updated successfully" });
});

router.get("/termsNConditions", async (req, res) => {
    // var filename = './config/PrivacyPolicy_v1.pdf';

    // fs.readFile(filename, function (err, data) {
    //     res.contentType("application/pdf");
    //     return res.send(data);
    // });

    var webview = await Webview.aggregate([{ $match: { status: "termsNConditions" } }]);
    return res.send(webview[0].text);
});

router.get("/privacyPolicy", async (req, res) => {
    // var filename = './config/PrivacyPolicy_v1.pdf';

    // fs.readFile(filename, function (err, data) {
    //     res.contentType("application/pdf");
    //     return res.send(data);
    // });

    var webview = await Webview.aggregate([{ $match: { status: "privacyPolicy" } }]);
    return res.send(webview[0].text);
});

router.get("/apiDocument", async (req, res) => {
    var filename = './config/RTDC_API_V1.0.pdf';
    fs.readFile(filename, function (err, data) {
        res.contentType("application/pdf");
        return res.send(data);
    });
});

module.exports = router;
