const dotenv = require('dotenv');
const pg = require('pg');

dotenv.config()

const client = new pg.Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
  });

class StudentService{

    constructor(){
        if (!client._connected) {
            client.connect((err) => {
                if (err) {
                  console.error('Error en la conexión a PostgreSQL', err);
                  return;
                }
                console.log('Conexión exitosa a PostgreSQL');
              });
        }
        
    }

    async getAllStudents(){

        try{
            const result = await client.query('SELECT * FROM "Student"');
            const students = result.rows;
            return students;

        }catch (err){
            throw err;
        }
        
    }

    async getAStudent(studentId){
        try{
            const result = await client.query('SELECT * FROM "Student" WHERE "Student"."studentId" = $1', [studentId]);
            const student = result.rows;
            return student;

        }catch (err){
            throw err;
        }

    }

    // async postAStudent(newStudentData){

    //     try{
    //         const newStudent = 

    //     }catch (err){
    //         throw err;
    //     }

    // }
}

module.exports = StudentService;