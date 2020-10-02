// // import amqp from 'amqplib/callback_api';
// const amqp =  require('amqplib/callback_api');
// const CONN_URL = 'amqps://yzhrvflq:Yl7a71T_yJ6KYXg4JezXVYYdArIJUGPQ@rattlesnake.rmq.cloudamqp.com/yzhrvflq';
// // const CONN_URL = 'amqp://gsgmnvnl:NITe9ThLkXQvKVLl7L6gEtMllb6obQmw@dinosaur.rmq.cloudamqp.com/gsgmnvnl';


// let ch = null;
// amqp.connect(CONN_URL, function (err, conn) {
//    conn.createChannel(function (err, channel) {
//       ch = channel;
//    });
// });


// const publishToQueue = async (queueName, data) => {
//    ch.sendToQueue(queueName, new Buffer(data), { persistent: true });
// }


// process.on('exit', (code) => {
//    ch.close();
//    console.log(`Closing rabbitmq channel`);
// });

// module.exports.publishToQueue = publishToQueue;





// Connect to mq server
// const open = require('amqplib').connect(process.env.AMQP_SERVER);	
const CONN_URL = 'amqps://yzhrvflq:Yl7a71T_yJ6KYXg4JezXVYYdArIJUGPQ@rattlesnake.rmq.cloudamqp.com/yzhrvflq';
const open = require('amqplib').connect(CONN_URL);	

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
          const { mail, subject, template } = JSON.parse(msg.content.toString());	        
          console.log(' [x] Received %s', mail);	        
          // send email via aws ses	        
          // sendUserVerificationMail(user.email, user.firstName, `http://localhost:9700/api/user/verify/${token.token}`);
          EmailService.sendMail(mail, subject, template).then(() => {	          
            channel.ack(msg);	        
          });	      
        }	    
      });	  
    }))
  .catch(error => console.warn(error));	
};

module.exports = {	  publishToQueue,	  consumeFromQueue	}