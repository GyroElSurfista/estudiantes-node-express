const SendMailService = require('../services/SendMailService');

const sendMailController = {};

sendMailController.sendMail = async function (req, res){
    const {mailTo} = req.body;

    try{
        
        const  sendMailS = new SendMailService();
        const info = await sendMailS.sendMail(mailTo);

        res.status(201).json({information : info});

    } catch (error){
        console.error('Error', error)
    } 
}

module.exports = sendMailController;