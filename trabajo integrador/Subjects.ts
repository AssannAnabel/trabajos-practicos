import { enumSubjects } from "./Enum";
import { Grades } from "./Enum";
import { Teacher } from "./Teacher";

export class subject{
    name:enumSubjects;
    grade:Grades;
    teacher:Teacher;
    constructor(name:enumSubjects,grade:Grades,teacher:Teacher){
        this.name=name;
        this.grade=grade;
        this.teacher=teacher;
    }

}