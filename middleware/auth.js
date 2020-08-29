const { MIDDLEWARE_AUTH_CONSTANTS } = require("../config/constant.js");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");
const { Admin } = require("../models/admin");
const { User } = require("../models/user");
const { ApiLog } = require("../models/apiLog");


function test(tempObj) {
  return async (req, res, next) => {
    console.log("TempObj: ", tempObj)
    next()
  }
}

adminAuth = async function (req, res, next) {
  if (!config.get("requiresAuth")) return next();

  let reqUserId = "";
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED });

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.jwtData = decoded;

    if (decoded.role !== "admin")
      return res.status(403).send({ statusCode: 403, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN });

    let admin = await Admin.findOne({ _id: mongoose.Types.ObjectId(decoded.userId) });
    // if (!admin || (user && user.accessToken !== token))
    if (!admin)
      return res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED });
    reqUserId = decoded.userId;

    await logApis(req.method, reqUserId, req.baseUrl + req.url, req.jwtData.email, req.jwtData.role, req.jwtData.subrole || "NA", req.body);

    next();
  } catch (ex) {
    res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.INVALID_AUTH_TOKEN });
  }
};

userAuth = async function (req, res, next) {
  if (!config.get("requiresAuth")) return next();

  let reqUserId = "";
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED });

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.jwtData = decoded;

    if (decoded.role !== "user")
      return res.status(403).send({ statusCode: 403, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN });

    let user = await User.findOne({ _id: mongoose.Types.ObjectId(decoded.userId) });
    if (!user || (user && user.accessToken !== token))
      return res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED });
    req.userData = user;
    reqUserId = decoded.userId;

    await logApis(req.method, reqUserId, req.baseUrl + req.url, req.jwtData.email, req.jwtData.role, req.jwtData.subrole || "NA", req.body);

    next();
  } catch (ex) {
    res.status(401).send({ statusCode: 401, message: "Failure", data: MIDDLEWARE_AUTH_CONSTANTS.INVALID_AUTH_TOKEN });
  }
};

async function logApis(method, userId, url, email, role, subrole, body) {
  if (method != "GET"); {
    let apiLog = new ApiLog({ method, userId, url, email, role, subrole, body })
    await apiLog.save()
  }
}

module.exports.test = test;
module.exports.adminAuth = adminAuth;
module.exports.userAuth = userAuth;