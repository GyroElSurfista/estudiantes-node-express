// app.js (o index.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000; // Puerto para el servidor

// Middleware para procesar datos JSON
app.use(express.json());
app.use(bodyParser.json());

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la gestión de estudiantes!');
});

// Rutas relacionadas con estudiantes
const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
