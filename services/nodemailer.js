const nodemailer = require('nodemailer'); 

let mailTransporter = nodemailer.createTransport({ 
  service: 'gmail', 
  auth: { 
      user: 'anselmleo@gmail.com', 
      pass: 'La4God&4youthog'
  } 
}); 


let mailDetails = { 
  from: 'anselmleo@gmail.com', 
  to: 'anselm.mba@gmail.com', 
  subject: 'Test mail', 
  text: 'Testing my GiG app!'
}; 


mailTransporter.sendMail(mailDetails, function(err, data) { 
  if(err) { 
      console.log('Error Occurs'); 
  } else { 

      console.log('Email sent successfully'); 
      return response.withData(res, data);
  } 
}); 