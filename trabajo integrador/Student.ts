
import { Members } from "./Members";
import { enumSubjects } from "./Enum";


export class Student extends Members{
    //subject:enumSubjects[];
    //average:number;

    constructor(name:string,lastName:string,id:number,birthDate:string,numPhone:number,address:string,email:string,numFile:number){
        super(name,lastName,id,birthDate,numPhone,address,email,numFile)
        //this.subject=subject;
        //this.average=average;
}
}