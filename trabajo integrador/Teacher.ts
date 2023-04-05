
import { Members } from "./Members";
import { enumSubjects } from "./Enum";

export class Teacher extends Members{
    subject:enumSubjects;
    salary:number;
   

   constructor( name:string,lastName:string,id:number,birthDate:string,numPhone: number,address:string,email:string,numFile:number,startDate:Date,subject:enumSubjects,salary:number){
    super(name,lastName,id,birthDate,numPhone,address,email,numFile)
    this.subject=subject;
    this.salary=salary;
   }

}