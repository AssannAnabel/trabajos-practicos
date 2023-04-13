import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Subject } from "./Subjects";
import { EnumSubjects } from "./Enum";
import { Grades } from "./Enum";
import { SchoolManager } from "./test";
import fs from "fs";
import readLineSync, { keyIn } from "readline-sync";

let mm = new SchoolManager();

mm.setEnrollStudent();//funciona
//mm.hireTeacher();//funciona
//mm.expelStudent();//funciona
//mm.fireTeacher();//funciona
//mm.editPerson();// se ejecuta, se puede modificar el nombre, se borran los otros estudiantes guardados.
