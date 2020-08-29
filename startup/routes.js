const express = require("express");
const config = require("config");
const appVersions = require("../routes/appVersions");
const admins = require("../routes/admins");
const users = require("../routes/users");
const roles = require("../routes/roles");
const webviews = require("../routes/webviews");
const s3upload = require("../routes/s3upload");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use("/api/version", appVersions);
  app.use("/api/admin", admins);
  app.use("/api/user", users);
  app.use("/api/role", roles);
  app.use("/api/webview", webviews);
  app.use("/api/s3upload", s3upload);
  app.use(error);
};
