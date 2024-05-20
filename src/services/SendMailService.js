const nodemailer = require("nodemailer");
const  pug = require('pug');
const path = require('path');


class SendMailService{

    constructor (){
        this.transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // Use `true` for port 465, `false` for all other ports
          tls: {rejectUnauthorized: false},
          auth: {
            user: "jairotrabaja123@gmail.com",
            pass: "bbxo pudq mczp wqkg",
          },
        });
    }

    async sendOTPMail(mailTo, userName, otpCode, time, unit){

        const templatesDir = process.env.TEMPLATES_DIR;
        const compiledMail = pug.compileFile(path.join(templatesDir, 'emailOTP.pug'));

        // const emailHtml = 

        const info = await this.transporter.sendMail({
          from: '<jairotrabaja123@gmail.com>"',
            to: `${mailTo}`, // list of receivers
            subject: "Código OTP", // Subject line
            html: compiledMail({
                name: userName,
                otp: otpCode,
                time: time,
                unit: unit
              }), // html body
          });

        return info;
    }
}

module.exports = SendMailService;