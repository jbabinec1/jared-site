const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const dotenv = require('dotenv'); 
dotenv.config({path: './config.env'});

let api = process.env.api;
let domain = process.env.domain;


const auth = {
    auth: {
        api_key: api,
        domain: domain
    }
}


const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'jbabinec1@gmail.com',
        subject: subject,
        text: text
    }

    
   transporter.sendMail(mailOptions, function(err, data){
    
        if(err){
            console.log(err, null);
        } else {
           console.log(null, data);
        }
    
    
    }) 

}

module.exports = sendMail;


