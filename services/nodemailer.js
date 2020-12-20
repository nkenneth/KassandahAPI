const config = require('config');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const winston = require('winston');
const { formatter } = require("./commonFunctions");
const {
  verifyEmailHtml,
  resetYourPasswordHtml,
  approvalEmailHtml,
  approverRejectedEmailHtml,
  approverApprovedEmailHtml,
} = require("../services/htmlTemplateFile");

const service = config.get("nodemailer.service");
const senderId = config.get("nodemailer.senderId");
const clientID = config.get("nodemailer.clientID");
const clientSecret = config.get("nodemailer.clientSecret");
const redirectURI = config.get("nodemailer.redirectURI");
const refreshToken = config.get("nodemailer.refreshToken");



const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

async function getAccessToken () {
  let accessToken = await oAuth2Client.getAccessToken();
  return accessToken;
}

let accessToken = getAccessToken();

let mailTransporter = nodemailer.createTransport({
  service: service,
  auth: {
    type: 'OAuth2',
    user: senderId,
    clientId: clientID,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    accessToken: accessToken
  }
});

// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: config.get("nodemailer.senderId"),
//     pass: config.get("nodemailer.secretKey")
//   }
// });



// let mailTransporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 587,
//   secure: false, // use TLS
//   auth: {
//     user: config.get("nodemailer.senderId"),
//     pass: config.get("nodemailer.secretKey")
//   }
// });



async function sendUserVerificationMail (email, firstName, callback) {

  let data = {
    name: firstName,
    callback: callback
  };

  const temp = formatter(verifyEmailHtml, data);

  const mailDetails = {
    from: config.get("nodemailer.senderId"),
    to: email,
    subject: config.get("email.verifyEmailSubject"),
    html: temp
  }


  try {
    result = await mailTransporter.sendMail(mailDetails);
    winston.info(`Sending of Email to ${email} success with status code: ${result.messageId}.`);
    return { MessageId: result.MessageId };
  } catch (error) {
    console.log(`Sending of Email failed. Error is: ${error}`);
    winston.error(`Sending of Email failed. Error is: ${error}`);
    return { code: error.code, message: error.message };
  }
}


async function sendApprovalMail (email, firstName, ticket) {

  let data = {
    name: firstName,
    ticketDescription: ticket.description,
    ticketItems: ticket.items,
    dueDate: ticket.dueDate
  };

  const temp = formatter(approvalEmailHtml, data);

  const mailDetails = {
    from: config.get("nodemailer.senderId"),
    to: email,
    subject: config.get("email.approvalEmailSubject"),
    html: temp
  }


  try {
    result = await mailTransporter.sendMail(mailDetails);
    winston.info(`Sending of Email to ${email} success with status code: ${result.messageId}.`);
    return { MessageId: result.MessageId };
  } catch (error) {
    console.log(`Sending of Email failed. Error is: ${error}`);
    winston.error(`Sending of Email failed. Error is: ${error}`);
    return { code: error.code, message: error.message };
  }
}




async function sendApproverTicketRejectedMail (email, firstName, ticket) {

  let data = {
    name: firstName,
    ticketDescription: ticket.description,
    ticketItems: ticket.items,
    dueDate: ticket.dueDate
  };

  const temp = formatter(approverRejectedEmailHtml, data);

  const mailDetails = {
    from: config.get("nodemailer.senderId"),
    to: email,
    subject: config.get("email.rejectedEmailSubject"),
    html: temp
  }


  try {
    result = await mailTransporter.sendMail(mailDetails);
    winston.info(`Sending of Email to ${email} success with status code: ${result.messageId}.`);
    return { MessageId: result.MessageId };
  } catch (error) {
    console.log(`Sending of Email failed. Error is: ${error}`);
    winston.error(`Sending of Email failed. Error is: ${error}`);
    return { code: error.code, message: error.message };
  }
}


async function sendApproverTicketApprovedMail (email, firstName, ticket) {

  let data = {
    name: firstName,
    ticketDescription: ticket.description,
    ticketItems: ticket.items,
    dueDate: ticket.dueDate
  };

  const temp = formatter(approverApprovedEmailHtml, data);

  const mailDetails = {
    from: config.get("nodemailer.senderId"),
    to: email,
    subject: config.get("email.approvedEmailSubject"),
    html: temp
  }


  try {
    result = await mailTransporter.sendMail(mailDetails);
    winston.info(`Sending of Email to ${email} success with status code: ${result.messageId}.`);
    return { MessageId: result.MessageId };
  } catch (error) {
    console.log(`Sending of Email failed. Error is: ${error}`);
    winston.error(`Sending of Email failed. Error is: ${error}`);
    return { code: error.code, message: error.message };
  }
}





module.exports.sendUserVerificationMail = sendUserVerificationMail;
module.exports.sendApprovalMail = sendApprovalMail;
module.exports.sendApproverTicketRejectedMail = sendApproverTicketRejectedMail;
module.exports.sendApproverTicketApprovedMail = sendApproverTicketApprovedMail;

