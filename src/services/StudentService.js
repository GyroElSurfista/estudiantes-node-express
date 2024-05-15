const dotenv = require('dotenv');
const pg = require('pg');

dotenv.config()

// const client = new pg.Client({
//     user: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB,
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT,
//   });

// if (!client._connected) {
//     client.connect((err) => {
//     if (err) {
//         console.error('Error en la conexión a PostgreSQL', err);
//         return;
//     }
//     console.log('Conexión exitosa a PostgreSQL');
//     });
// }

class StudentService{

    // constructor(client){
    //     this.client = client;  
    // }

    // async getAllStudents(){

    //     try{
    //         const result = await client.query('SELECT * FROM student');
    //         const students = result.rows;
    //         return students;

    //     }catch (err){
    //         throw err;
    //     }
        
    // }

    // async getAStudent(studentId){
    //     try{
    //         const result = await client.query('SELECT * FROM student WHERE student.studentId = $1', [studentId]);
    //         const student = result.rows;
    //         return student;

    //     }catch (err){
    //         throw err;
    //     }

    // }

    // async postAStudent(newStudentData){

    //     try{
    //         const query = "INSERT INTO student(studentName, studentLastname, studentCode, studentEmail, studentPassword) VALUES ($1,$2,$3,$4,$5)";
    //         const values = [newStudentData.stName, newStudentData.stLastname, newStudentData.stCode, newStudentData.stEmail, newStudentData.stPass];
    //         const result = await client.query(query, values);
    //         return result.rows[0];
    //     }catch (err){
    //         throw err;
    //     }

    // }
}

module.exports = StudentService;