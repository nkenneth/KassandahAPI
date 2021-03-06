const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();


require("./startup/logging")();
require("./startup/logger");
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);
require("./startup/seed")();
require("./startup/static")(app);

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

//setInterval(callWorkerThread, 3000);
//setInterval(checkPendingCallsThread, 1000 * 60 * 30);

module.exports = server;