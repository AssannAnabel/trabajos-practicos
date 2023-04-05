

export class SchoolManager{
    dataStudents() {return JSON.parse(fs.readFileSync('./students.json','utf-8'))}
    dataTeachers() {return JSON.parse(fs.readFileSync('./teachers.json','utf-8'))}

setEnrolerStudents(){

    let name=readLineSync.question('Escriba el nombre del Alumno:--> ').tolowerCase();
    let lastName=readLineSync.question('Escriba el apellido del Alumno:--> ');
    let id=Number(readLineSync.question('Escriba el documento del Alumno:-->'));
    let birthDate=readLineSync.question('Escriba fecha de nacimiento año/mes/dia:-->');
    let numPhone=Number(readLineSync.question('Escriba el numero del alumno madre/padre/tutor:--> '));
    let address=readLineSync.question('Escriba la direccion del alumno:-->').tolowerCase()
    let email=readLineSync.question('Escriba el mail del alumno/madre/padre/tutor').tolowerCase();
    let numFile=Number(readLineSync.question('Escriba el numero del legajo'));
    let average=Number(readLineSync.question('ingrese la nota'));



const materias=["matematica","lengua","historia","literatura"];
let materiasAnotadas:string[] = [];

//console.log("Bienvenido al sistema de anotación de materias.");
//console.log("Por favor, seleccione las materias en las que desea inscribirse:");

// Iterar sobre todas las materias disponibles
for (let i = 0; i < materias.length; i++) {
  const materia = materias[i];
  
  const anotarse = readlineSync.question(`¿Desea anotarse en ${materia}? (s/n) `);

  if (anotarse.toLowerCase() === 's') {
    // Si el usuario responde 'y', agregar la materia a las materias anotadas
    materiasAnotadas.push(materia);
  }
}
let estudiante=new Student()