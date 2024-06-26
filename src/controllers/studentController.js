const StudentService = require('../services/StudentService');

const studentController = {};

// Método para obtener todos los estudiantes
studentController.getAllStudents = async (req, res) => {
    try {
        
        const studentS = new StudentService()
        // Llama al método correspondiente del servicio para obtener todos los estudiantes
        const allStudents = await studentS.getAllStudents()
        
        // Envía la respuesta al cliente
        res.status(200).json(allStudents)
    } catch (error) {
        console.error('Error xd', error)
    }
};

studentController.getOneStudent = async(req, res) => {
    try{

        const studentS = new StudentService()

        const oneStudent = await studentS.getAStudent(req.params.id)

        res.status(200).json(oneStudent)
    } catch (error) {
        console.error('Error xd', error)
    }
};

studentController.postAStudent = async(req, res) => {

    const { stName, stLastname, stCode, stEmail, stPass } = req.body;
    
    try{
        const newStudentData = {stName, stLastname, stCode, stEmail, stPass};
        const studentS = new StudentService();
        const newStudent = await studentS.postAStudent(newStudentData);
        res.status(201).json(newStudent);

    } catch (error){
        console.error('Error xd', error)
    } 
}

module.exports = studentController;