
import { Members } from "./Members";
import { EnumSubjects } from "./Enum";
import { Subject } from "./Subjects";
import {Teacher} from "./Teacher";

export class Student extends Members{
    subjects:Subject[];
    average:number;
    

    constructor(name:string,lastName:string,id:number,birthDate:string,numPhone:number,address:string,email:string,numFile:number,subjects:Subject[]){
        super(name,lastName,id,birthDate,numPhone,address,email,numFile)
        this.subjects=subjects;
        this.average=Number(this.calculateAverage());
}

addSubjects(name:string,grade:number,teacher:string){
    let subject=new Subject(name,grade,teacher);
    this.subjects.push(subject);

}
calculateAverage(){
    const sum = this.subjects.reduce((acc, subject) => acc + subject.grade, 0);
    this.average = sum / this.subjects.length;
    return this.average  
   
}


}
