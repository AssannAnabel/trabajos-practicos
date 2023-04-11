import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Subject } from "./Subjects";
import { EnumSubjects } from "./Enum";
import { Grades } from "./Enum";
import fs from "fs";
import readLineSync, { keyIn } from "readline-sync";
import { KeyObject } from "crypto";


export class SchoolManager{


  dataStudents(){ return JSON.parse(fs.readFileSync("./students.json", "utf-8"))}
  dataTeachers(){ return JSON.parse(fs.readFileSync("./teachers.json", "utf-8"))}

  setEnrollStudent(){
      let name= readLineSync.question("Ingrese nombre del Alumno:-->").toLowerCase();
      let lastName= readLineSync.question("Ingrese apellido del Alumno:-->").toLowerCase();
      let id= Number (readLineSync.question("Ingrese DNI (sin punto) del Alumno:-->"));
      let birthDate= readLineSync.question("Ingrese fecha de nacimiento del Alumno (ano-mes-dia):-->");
      let numPhone=Number (readLineSync.question("Ingrese numero de telefono Alumno, Madre, Padre o Tutor:-->"));
      let address= readLineSync.question("Ingrese direccion del Alumno:-->").toLowerCase();
      let email= readLineSync.question("Ingrese email del Alumno, Madre, Padre, o Tutor:-->").toLowerCase();
      let numFile=this.dataStudents().length+1;

  let newStudent= new Student (name, lastName, id, birthDate,numPhone, address, email, numFile,[],) ;
let amountSubject= Number(readLineSync.question("¿A cuantas meterias se quiere anotar?"))
for(let i=1; i<= amountSubject; i++){
  let listSubjects= ["Matematicas", "Lengua","C.Sociales", "C.Naturales","Ingles","Ed.Fisica"]
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
hireTeacher(){
  let name= readLineSync.question("Ingrese nombre del Profesor:-->").toLowerCase();
      let lastName= readLineSync.question("Ingrese apellido del Profesor:-->").toLowerCase();
      let id= Number (readLineSync.question("Ingrese DNI (sin punto) del Profesor:-->"));
      let birthDate= readLineSync.question("Ingrese fecha de nacimiento del Profesor (ano-mes-dia):-->");
      let numPhone=Number (readLineSync.question("Ingrese numero de telefono Pofesor:-->"));
      let address= readLineSync.question("Ingrese direccion del Profesor:-->").toLowerCase();
      let email= readLineSync.question("Ingrese email del Profesor:-->").toLowerCase();
      let numFile=this.dataTeachers().length+1;
      let listSubjects= Object.values(EnumSubjects);
      let addSubject= readLineSync.keyInSelect(listSubjects, "¿Que materia dicta?");
      let subject= listSubjects[addSubject];
      let newTeacher= new Teacher(name,lastName,id,birthDate,numPhone,address,email,numFile,subject);
      let teachers= [...this.dataTeachers(), newTeacher];
      fs.writeFileSync("./teachers.json", JSON.stringify(teachers,null,2))
}

expelStudent(id= Number (readLineSync.question("Ingrese DNI (sin punto) del Alumno:-->"))){
  let listStudent= this.dataStudents();
  let deleteStudent= listStudent.findIndex((listStudent:{id:number})=> listStudent.id===id);

  if(deleteStudent>=0){
    listStudent.splice(deleteStudent,1);
    console.log(`El alumno ${id} fue expulsado`);
    }else{
      console.log(`El alumno ${id} no fue encontrado en el listado`);      
    }
    fs.writeFileSync("./students.json", JSON.stringify(listStudent));

}

fireTeacher(id= Number (readLineSync.question("Ingrese DNI (sin punto) del Profesor:-->"))){
  let listTeacher= this.dataTeachers();
  let deleteTeacher= listTeacher.findIndex((listTeacher:{id:number})=> listTeacher.id===id);

  if(deleteTeacher>=0){
    listTeacher.splice(deleteTeacher,1);
    console.log(`El docente ${id} fue despedido`);
    }else{
      console.log(`El docente ${id} no fue encontrado en el listado`);      
    }
    fs.writeFileSync("./teachers.json", JSON.stringify(listTeacher));
}

editPerson(id:number=Number(readLineSync.question("Ingrese DNI de la Persona a modificar:--> "))){
let listTeacher=this.dataTeachers();
let listStudent= this.dataStudents();
let person=listStudent.findIndex((listStudent:{id:number})=>listStudent.id===id);



if(person>0) {
let student= listStudent.find((listStudent:{id:number})=>listStudent.id===id);
let mof= Object.keys(student);
console.log(mof);


//student.name=readLineSync.question("modifique nombre del Alumno:-->").toLowerCase();
fs.writeFileSync("./students.json", JSON.stringify(student))
  
 



}else{
  let teacher= listTeacher.find((listTeacher:{id:number})=>listTeacher.id===id);
  console.log(teacher);
  
}



}


}

let mm= new SchoolManager


//mm.setEnrollStudent();
//mm.hireTeacher();
//mm.expelStudent();
//mm.fireTeacher();
mm.editPerson();
  