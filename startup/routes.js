const express = require("express");
const config = require("config");
const appVersions = require("../routes/appVersions");
const admins = require("../routes/admins");
const users = require("../routes/users");
const tickets = require("../routes/tickets");
const categories = require("../routes/categories");
const departments = require("../routes/departments");
const vendors = require("../routes/vendors");
const roles = require("../routes/roles");
const s3upload = require("../routes/s3upload");
const reqLogger = require("../startup/logger");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(reqLogger);
  app.use("/api/version", appVersions);
  app.use("/api/admin", admins);
  app.use("/api/user", users);
  app.use("/api/ticket", tickets);
  app.use("/api/category", categories);
  app.use("/api/department", departments);
  app.use("/api/vendor", vendors);
  app.use("/api/role", roles);
  app.use("/api/s3upload", s3upload);
  app.use(error);
};
