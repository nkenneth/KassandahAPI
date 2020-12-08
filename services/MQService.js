
const config = require('config');
const CONN_URL = config.get('MQ_CONN_URL');
const EmailService = require('./amazonSes');
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
          const { email, firstName, mailOptions } = JSON.parse(message.content.toString());
          console.log(' [x] Received %s', email);
          switch (mailOptions.mailType) {
            case "sendUserVerificationMail":
              // send verification mail via aws ses
              EmailService.sendUserVerificationMail(email, firstName, mailOptions.callback_url)
              .then(() => {
                channel.ack(message);
              });
              break;

            case "sendApprovalMail":
              // send approval mail via aws ses
              EmailService.sendApprovalMail(email, firstName).then(() => {
                channel.ack(message);
              });

            case "sendRejectMail":
              // send rejection mail via aws ses
              EmailService.sendRejectMail(email, firstName).then(() => {
                channel.ack(message);
              });

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