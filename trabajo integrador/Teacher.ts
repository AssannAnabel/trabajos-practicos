
import { Members } from "./Members";
import { EnumSubjects } from "./Enum";

export class Teacher extends Members{
    subject:EnumSubjects;
    
   

   constructor( name:string,lastName:string,id:number,birthDate:string,numPhone: number,address:string,email:string,numFile:number,subject:EnumSubjects){
    super(name,lastName,id,birthDate,numPhone,address,email,numFile)
    this.subject=subject;
    
   }

}