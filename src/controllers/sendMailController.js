const SendMailService = require('../services/SendMailService');

const sendMailController = {};

sendMailController.sendMail = async function (req, res){
    const {mailTo, userName, otpCode, time, unit} = req.body;

    console.log(req.body);

    if (!mailTo || !userName || !otpCode || !time || !unit) {
        return res.status(400).json({ error: 'Todos los campos son necesarios' });
    }

    try{
        
        const  sendMailS = new SendMailService();
        const info = await sendMailS.sendOTPMail(mailTo, userName, otpCode, time, unit);

        res.status(201).json({information : info});

    } catch (error){
        console.error('Error', error)
    } 
}

module.exports = sendMailController;