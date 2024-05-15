// routes/students.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');



// Obtener todos los estudiantes
router.get('/', (req, res) => {
  // controller.getAllStudents(req,res);
});

// Obtener un estudiante por ID
router.get('/:id', (req, res) => {
  // controller.getOneStudent(req, res)

});

// Agregar un nuevo estudiante
router.post('/', (req, res) => {

  // controller.postAStudent(req, res);

});

// Actualizar un estudiante existente
router.put('/:id', (req, res) => {
  
});

// Eliminar un estudiante por ID
router.delete('/:id', (req, res) => {
  

});

module.exports = router;
