const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'your api key',
        domain: 'your domain name'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// adding a callback 
const sendMail = (email,subject,text,cb) => {

    transporter.sendMail({
        from: email, 
        to: "", // your email id
        subject,
        text
    }, function(err,info) {
        if (err) {
            cb(err,null);
        }
        else {
            cb(null,info);
        }
    })
}

module.exports = sendMail;