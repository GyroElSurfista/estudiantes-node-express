// app.js (o index.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000; // Puerto para el servidor

// Middleware para procesar datos JSON
app.use(express.json());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'pug');

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la gestión de estudiantes!');
});


// Rutas relacionadas con estudiantes
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Rutas para el envio de correos
const  mailRouter = require('./routes/mails');
app.use('/mails', mailRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

