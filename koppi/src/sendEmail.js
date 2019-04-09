//To run this script, open terminal>cd trail> cd src> node sendEmail.js
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'koppresh@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'koppresh@gmail.com',
  //to: 'madhumpandurangi@gmail.com,bharathbandi96@gmail.com,chandan.naidu97@gmail.com',
  to: 'koppresh@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Testing our email service for our project, if receieved please kindly revert back.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent successfully: ' + info.response);
  }
}); 