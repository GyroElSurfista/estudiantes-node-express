const nodemailer = require("nodemailer");


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

    async sendMail(mailTo){
        const info = await this.transporter.sendMail({
          from: '"Jairo👻" <jairotrabaja123@gmail.com>"',
            to: `${mailTo}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });

        return info;
    }
}

module.exports = SendMailService;