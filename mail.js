const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');




const auth = {
    auth: {
        api_key:'67740185c6de2541e855ce533ab2950d-28d78af2-618b1d5e',
        domain: 'sandbox63dbbe145723469ea518126521451bb6.mailgun.org'
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


