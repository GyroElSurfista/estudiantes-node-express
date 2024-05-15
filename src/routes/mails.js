const express = require('express');
const router = express.Router();
const sendMailController = require('../controllers/sendMailController');

// Ruta para enviar correos electrónicos
router.post('/', (req, res) => {
    sendMailController.sendMail(req, res);
});

module.exports = router;
