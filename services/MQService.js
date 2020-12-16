
const config = require('config');
const CONN_URL = config.get('MQ_CONN_URL');
const AmazonEmailService = require('./amazonSes');
const NodeEmailService = require('./nodemailer');
const open = require('amqplib').connect(CONN_URL);
const queue = 'sendEmails';

// Send Email Publisher
const publishToQueue = payload => open.then(connection => connection.createChannel())
  .then(channel => channel.assertQueue(queue, { durable: true })
    .then(() => channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)))))
      .catch(error => console.warn(error));


// Send Email Consumer
const consumeFromQueue = () => {
  open.then(connection => connection.createChannel())
    .then(channel => channel.assertQueue(queue)
    .then(() => {
      console.log(' [*] Waiting for messages in %s. To exit press CTRL+C ', queue);
      return channel.consume(queue, (message) => {
        console.log('i got to consume')
        if (message !== null) {
          const { email, firstName, mailOptions, ticket } = JSON.parse(message.content.toString());
          console.log(' [x] Received %s', email);
          switch (mailOptions.mailType) {
            case "sendUserVerificationMail":
              // // send verification mail via aws ses
              // AmazonEmailService.sendUserVerificationMail(email, firstName, mailOptions.callback_url)
              // .then(() => {
              //   channel.ack(message);
              // });
              console.log(`sending ${mailOptions.mailType}`);
              NodeEmailService.sendUserVerificationMail(email, firstName, mailOptions.callback_url)
              .then(() => {
                channel.ack(message);
              });
              break;

            case "sendApprovalMail":
              // // send approval mail via aws ses
              // AmazonEmailService.sendApprovalMail(email, firstName).then(() => {
              //   channel.ack(message);
              // });
              console.log(`sending ${mailOptions.mailType}`);
              NodeEmailService.sendApprovalMail(email, firstName, ticket)
              .then(() => {
                channel.ack(message);
              });
              break;

            case "sendApproverTicketRejectedMail":
              // // send rejection mail via aws ses
              // AmazonEmailService.sendRejectMail(email, firstName).then(() => {
              //   channel.ack(message);
              // });
              console.log(`sending ${mailOptions.mailType}`);
              NodeEmailService.sendApproverTicketRejectedMail(email, firstName)
              .then(() => {
                channel.ack(message);
              });
              break;

            case "sendApproverTicketApprovedMail":
              // // send rejection mail via aws ses
              // AmazonEmailService.sendRejectMail(email, firstName).then(() => {
              //   channel.ack(message);
              // });
              console.log(`sending ${mailOptions.mailType}`);
              NodeEmailService.sendApproverTicketApprovedMail(email, firstName)
              .then(() => {
                channel.ack(message);
              });
              break;

            default:
              break;
          }
        }
      });
    }))
  .catch(error => console.warn(error));
};

module.exports = {  publishToQueue,	  consumeFromQueue	}

require('make-runnable');