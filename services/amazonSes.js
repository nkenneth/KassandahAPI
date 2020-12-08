const aws = require("aws-sdk");
const config = require("config");
const winston = require("winston");
const {
  verifyEmailHtml,
  resetYourPasswordHtml,
  approvalEmail,
  rejectionEmail,
} = require("../services/htmlTemplateFile");
const { formatter } = require("../services/commonFunctions");
let secretAccessKey = config.get("S3_SECRET_KEY");
let accessKeyId = config.get("S3_ACCESS_KEY");
let region = config.get("S3_BUCKET_REGION");

aws.config.update({
  secretAccessKey: secretAccessKey,
  accessKeyId: accessKeyId,
  region: region,
});
const ses = new aws.SES();




async function sendResetPasswordMail(email, username, callback) {
  let data = {
    name: username,
    callback: callback
  };
  const temp = formatter(resetYourPasswordHtml, data);
  const msg = {
    Destination: {
      ToAddresses: [email], // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: temp,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Reset your password",
        Data: config.get("email.resetPasswordSubject")
      },
    },
    Source: config.get("ses.senderId"),
  };
  try {
    const result = await ses.sendEmail(msg).promise();
    winston.info(`Sending of Email to ${email} success with status code: ${result.MessageId}.`);
    return { MessageId: result.MessageId };
  } catch (Ex) {
    winston.error(`Sending of Email failed for ${email} with errorcode: ${Ex.code}: ${Ex.message}.`);
    return { code: Ex.code, message: Ex.message };
  }
}

async function sendUserVerificationMail(email, firstName, callback) {
  let data = {
    name: firstName,
    callback: callback
  };
  const temp = formatter(verifyEmailHtml, data);
  const msg = {
    Destination: {
      ToAddresses: [email], // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: temp,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "email.verifyEmailSubject",
      },
    },
    Source: config.get("ses.senderId"),
  };
  try {
    const result = await ses.sendEmail(msg).promise();
    winston.info(`Sending of Email to ${email} success with status code: ${result.MessageId}.`);
    return { MessageId: result.MessageId };
  } catch (Ex) {
    winston.error(`Sending of Email failed for ${email} with errorcode: ${Ex.code}: ${Ex.message}.`);
    return { code: Ex.code, message: Ex.message };
  }
}

async function sendApprovalMail(email, firstName) {
  const temp = formatter(approvalEmail, firstName);
  const msg = {
    Destination: {
      ToAddresses: [email], // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: temp,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: config.get("email.phaseApprovalSubject"),
      },
    },
    Source: config.get("ses.senderId"),
  };
  try {
    const result = await ses.sendEmail(msg).promise();
    winston.info(`Sending of Email to ${email} success with status code: ${result.MessageId}.`);
    return { MessageId: result.MessageId };
  } catch (Ex) {
    winston.error(`Sending of Email failed for ${email} with errorcode: ${Ex.code}: ${Ex.message}.`);
    return { code: Ex.code, message: Ex.message };
  }
}

async function sendRejectMail(email, firstName) {
  const temp = formatter(rejectionEmail, firstName);
  const msg = {
    Destination: {
      ToAddresses: [email], // Email address/addresses that you want to send your email
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: "UTF-8",
          Data: temp,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: config.get("email.phaseRejectionSubject"),
      },
    },
    Source: config.get("ses.senderId"),
  };
  try {
    const result = await ses.sendEmail(msg).promise();
    winston.info(`Sending of Email to ${email} success with status code: ${result.MessageId}.`);
    return { MessageId: result.MessageId };
  } catch (Ex) {
    winston.error(`Sending of Email failed for ${email} with errorcode: ${Ex.code}: ${Ex.message}.`);
    return { code: Ex.code, message: Ex.message };
  }
}



module.exports.sendUserVerificationMail = sendUserVerificationMail;
module.exports.sendResetPasswordMail = sendResetPasswordMail;
module.exports.sendApprovalMail = sendApprovalMail;
module.exports.sendRejectMail = sendRejectMail;
