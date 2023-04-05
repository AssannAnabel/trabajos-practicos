import fs from 'fs'
import readLineSync from 'readline-sync'

import { Student } from "./Student"
import { Teacher } from "./Teacher"
import { subject } from "./Subjects"
import { enumSubjects } from "./Enum"
import { Grades } from "./Enum"

export class SchoolManager{
    dataStudents() {return JSON.parse(fs.readFileSync('./students.json','utf-8'))}
    dataTeachers() {return JSON.parse(fs.readFileSync('./teachers.json','utf-8'))}

setEnrolerStudents(){

    let name=readLineSync.question('Escriba el nombre del Alumno:--> ').toLowerCase();
    let lastName=readLineSync.question('Escriba el apellido del Alumno:--> ');
    let id=Number(readLineSync.question('Escriba el documento del Alumno:-->'));
    let birthDate=readLineSync.question('Escriba fecha de nacimiento año/mes/dia:-->');
    let numPhone=Number(readLineSync.question('Escriba el numero del alumno madre/padre/tutor:--> '));
    let address=readLineSync.question('Escriba la direccion del alumno:-->').toLowerCase()
    let email=readLineSync.question('Escriba el mail del alumno/madre/padre/tutor').toLowerCase();
    let numFile=Number(readLineSync.question('Escriba el numero del legajo'));
    //let average=Number(readLineSync.question('ingrese la nota'));
    const materias=["matematica","lengua","historia","literatura"];
        let materiasAnotadas:string[] = [];
        for (let i = 0; i < materias.length; i++) {
            const materia = materias[i];
        const anotarse = readLineSync.question(`¿Desea anotarse en ${materia}? (s/n) `);
            if (anotarse.toLowerCase() === 's') {materiasAnotadas.push(materia)
            }
                }
let estudiante=new Student(name,lastName,id,birthDate,numPhone,address,email,numFile);
let estudi=[...this.dataStudents(),estudiante]
fs.writeFileSync('./students',JSON.stringify(estudi,null,2))
}
}

