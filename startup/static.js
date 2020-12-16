// let express
let storageDir = require('path').join(__dirname, '../storage');
let client = require('path').join(__dirname, '../client');
let express = require("express");


module.exports = function (app) {
  console.log(storageDir)
  app.use(express.static(storageDir));

  // set temporary static path
  console.log(client)
  app.use(express.static(client));
};
