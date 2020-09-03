const aws = require("aws-sdk");
const config = require("config");
const winston = require("winston");
const {
  verifyotp,
  verifyEmailHtml,
  resetYourPasswordHtml,
  approvalEmail,
  welcomeOnboard,
  rejectionMail,
  RegisterationMail,
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

async function sendOtpMail(email, username, otp) {
  // if (username) text = `Hey ${username}, your OTP is ${otp}.`;
  let data = {
    name: username,
    otp: otp,
  };
  const temp = formatter(verifyotp, data);
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
        Data: config.get("email.otpSubject"),
      },
    },
    Source: config.get("email.senderId"),
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


async function sendResetPasswordMail(email, username, token) {
  let data = {
    name: username,
    token: token,
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
      },
    },
    Source: "anselm.mba@thegiggroupng.com",
    // Source: config.get("email.senderId"),
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

async function sendUserVerificationMail(email, username, token) {
  let data = {
    name: username,
    token: token,
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
        // Data: config.get("email.otpSubject"),
        Data: "Verify your email",
      },
    },
    Source: "anselm.mba@thegiggroupng.com",
    // Source: config.get("email.senderId"),
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

async function sendApprovalMail(email, username, operatorCode, password) {
  let data = {
    name: username,
    email: email,
    username: email,
    operatorCode: operatorCode,
    password: "Password you used while registration to be used.",
  };
  const temp = formatter(approvalEmail, data);
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
        Data: config.get("email.accountApprovalSubject"),
      },
    },
    Source: config.get("email.senderId"),
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

async function sendOnboardingMail(email, username) {
  let data = {
    name: username,
    email: email,
  };
  const temp = formatter(welcomeOnboard, data);

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
        Data: config.get("email.welcomeOnboardSubject"),
      },
    },
    Source: config.get("email.senderId"),
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

async function sendRejectionMail(email, username, rejectReason) {
  let data = {
    name: username,
    email: email,
    rejectionReason: rejectReason,
  };
  const temp = formatter(rejectionMail, data);

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
        Data: config.get("email.rejectionSubject"),
      },
    },
    Source: config.get("email.senderId"),
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

async function sendUserRegisterMail(user, password) {
  let data = {
    name: "USER",
    email: user.email,
    username: user.email,
    password: password,
  };
  const temp = formatter(RegisterationMail, data);

  const msg = {
    Destination: {
      ToAddresses: [user.email], // Email address/addresses that you want to send your email
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
        Data: config.get("email.welcomeUser"),
      },
    },
    Source: config.get("email.senderId"),
  };
  try {
    const result = await ses.sendEmail(msg).promise();
    winston.info(`Sending of Email to ${user.email} success with status code: ${result.MessageId}.`);
    return { MessageId: result.MessageId };
  } catch (Ex) {
    winston.error(`Sending of Email failed for ${user.email} with errorcode: ${Ex.code}: ${Ex.message}.`);
    return { code: Ex.code, message: Ex.message };
  }
}



// Helper function
async function send() {
  try {
    const result = await sendOtpMail("dhaliwalinderjot@gmail.com", "inder", "12234");
    if (result.MessageId) console.log(`Sending of Email success with mesage Id: ${result.MessageId}`);
    else if (result.code) console.log(`Sending of Email failed with errorcode: ${result.code}: ${result.message}.`);
  } catch (Ex) {
    // console.log(Ex);
    console.log("Sending of Email failed due to some server error!!!");
  }
}

//send();
//sendOtpMail("dhaliwalinderjot@gmail.com", "inder", 123123);
//sendApprovalMail("dhaliwalinderjot@gmail.com", "inder", "OP123KWEJ", "");
//sendOnboardingMail("dhaliwalinderjot@gmail.com", "inder");
//sendRejectionMail("dhaliwalinderjot@gmail.com", "inder", "we dont like you");

module.exports.sendOtpMail = sendOtpMail;
module.exports.sendUserVerificationMail = sendUserVerificationMail;
module.exports.sendResetPasswordMail = sendResetPasswordMail;
module.exports.sendApprovalMail = sendApprovalMail;
module.exports.sendOnboardingMail = sendOnboardingMail;
module.exports.sendRejectionMail = sendRejectionMail;
module.exports.sendUserRegisterMail = sendUserRegisterMail;
