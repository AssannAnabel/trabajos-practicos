import fs from 'fs'
import readLineSync from 'readline-sync'

import { Student } from "./Student"
import { Teacher } from "./Teacher"
import { Subject } from "./Subjects"
import { EnumSubjects } from "./Enum"
import { Grades } from "./Enum"

export class SchoolManager{
    constructor(){
        fs.writeFileSync('./students.json','[]','utf-8')
        fs.writeFileSync('./teachers.json','[]','utf-8')
}

    dataStudents() {return JSON.parse(fs.readFileSync('./students.json','utf-8'))}
    dataTeachers() {return JSON.parse(fs.readFileSync('./teachers.json','utf-8'))}

    setEnrollStudent(){
        let name= readLineSync.question("Ingrese nombre del Alumno:-->").toLowerCase();
        let lastName= readLineSync.question("Ingrese apellido del Alumno:-->").toLowerCase();
        let id= Number (readLineSync.question("Ingrese DNI (sin punto) del Alumno:-->"));
        let birthDate= readLineSync.question("Ingrese fecha de nacimiento del Alumno (ano-mes-dia):-->");
        let numPhone=Number (readLineSync.question("Ingrese numero de telefono Alumno, Madre, Padre o Tutor:-->"));
        let address= readLineSync.question("Ingrese direccion del Alumno:-->").toLowerCase();
        let email= readLineSync.question("Ingrese email del Alumno, Madre, Padre, o Tutor:-->").toLowerCase();
        let numFile=this.dataStudents().length+1;
        

        let newStudent= new Student (name, lastName, id, birthDate,numPhone, address, email, numFile,[]) ;
    
        let amountSubject= Number(readLineSync.question("¿A cuantas meterias se quiere anotar?"))
            for(let i=1; i<= amountSubject; i++){
            let listSubjects= ["Matematica", "Lengua","Cs.Sociales", "Cs.Naturales","Ingles","Ed.Fisica"]
            let addSubject= readLineSync.keyInSelect(listSubjects, "Selecione Materia")
            let subject= listSubjects[addSubject];
            let listGrade=["1","2","3","4","5","6","7","8","9","10"];
            let addGrade= readLineSync.keyInSelect(listGrade, "Selecione nota");
            let grade= addGrade;
            let listTeacher=["Prof. Mat. Miriam Di Carlo","Prog. Leng. Maria Manna ", "Prof. Soc. Patricia Rojas","Prof. Nat. Claudia Perez", "Prof. Ing. Julieta Kesler", "Prof. Edu. Gustavo Poffer"];
            let addTeacher= readLineSync.keyInSelect(listTeacher, "Selecione Profesor");      
            let teacher= listTeacher[addTeacher]
            newStudent.addSubjects(subject,grade,teacher)
       
  }
 newStudent.calculateAverage();
    let students= [...this.dataStudents(), newStudent];
    fs.writeFileSync("./students.json", JSON.stringify(students, null, 2))

}
}


let mm = new SchoolManager;

mm.setEnrollStudent()

let reg=new SchoolManager
reg.setEnrollStudent()
