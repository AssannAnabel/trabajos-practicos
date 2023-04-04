
import { Members } from "./Members";
import { enumSubjects } from "./Enum";


export class Student extends Members{
    subject:enumSubjects;
    average:number;
    constructor(name:string,lastName:string,id:number,birthDate:Date,numPhone:number,address:string,email:string,numFile:number,startDate:Date,subject:enumSubjects,average:number){
        super(name,lastName,id,birthDate,numPhone,address,email,numFile,startDate)
        this.subject=subject;
        this.average=average;
}
}