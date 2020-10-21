
const config = require('config');
const CONN_URL = config.get('MQ_CONN_URL');
const EmailService = require('./amazonSes');
const open = require('amqplib').connect(CONN_URL);	
const queue = 'send-email';

// Publisher
const publishToQueue = payload => open.then(connection => connection.createChannel())
  .then(channel => channel.assertQueue(queue)
    .then(() => channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)))))
      .catch(error => console.warn(error));


// Consumer	
const consumeFromQueue = () => { 
  open.then(connection => connection.createChannel())
    .then(channel => channel.assertQueue(queue)
    .then(() => { 
      console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);	    
      return channel.consume(queue, (msg) => {	      
        if (msg !== null) {	        
          const { email, firstName, callback_url } = JSON.parse(msg.content.toString());	        
          console.log(' [x] Received %s', email);	        
          // send email via aws ses	        
          // sendUserVerificationMail(user.email, user.firstName, `http://localhost:9700/api/user/verify/${token.token}`);
          EmailService.sendUserVerificationMail(email, firstName, callback_url).then(() => {	          
            channel.ack(msg);	        
          });	      
        }	    
      });	  
    }))
  .catch(error => console.warn(error));	
};

module.exports = {  publishToQueue,	  consumeFromQueue	}

require('make-runnable');