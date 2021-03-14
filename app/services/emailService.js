"use strict"

require('dotenv').config()
const nodemailer = require('nodemailer')



let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

let sendMail = (mailOptions)=>{
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }else {
        console.log('Email sent: ' + info.response);
        return 'Email sent: ' + info.response
      }
  });
};

module.exports = sendMail;