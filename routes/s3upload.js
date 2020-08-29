const { SYSTEM_FAILURE } = require("../config/constant.js");
const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const gm = require("gm").subClass({ imageMagick: true });

// For Saving on disk first
const upload = multer({ dest: "./images/uploaded/" });
const singleUpload = upload.single("image");

// For saving directly on S3
var storage = multer.memoryStorage();
var uploadDirect = multer({ storage: storage });
const { uploadFileS3, uploadDirectFileS3 } = require('../services/s3UploadData');


const FOLDER_NAME = "dummy";

const FileUrl = "https://" + "s3." + config.get("S3_BUCKET_REGION") + ".amazonaws.com/" + config.get("S3_BUCKET_NAME") + "/";

// https://s3.ap-south-1.amazonaws.com/s3.zimblecode.com/throne//1589816469742_image.jpeg


router.post("/image-upload", uploadDirect.single("image"), async function (req, res) {
    const dateString = Date.now().toString();
    const Key = dateString + "_" + req.file.originalname;

    var imagePath = FOLDER_NAME;
    var url = FileUrl + imagePath + "/" + Key;
    let userData = req.body.userData;
    try {
        await uploadDirectFileS3(Key, imagePath, req.file.buffer);
    } catch (Ex) {
        console.log("Exception: ", Ex);
        return handleError(Ex, res);
    }
    res.send({
        statusCode: 200,
        message: "Success",
        data: {
            url,
            userData
        }
    });
});

const handleError = (err, res) => {
    console.log(err);
    res
        .status(500)
        .contentType("text/plain")
        .end(SYSTEM_FAILURE);
};

module.exports = router;
