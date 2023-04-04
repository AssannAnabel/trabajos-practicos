import { Person } from "./Person"

export abstract class Members implements Person{
    name:string;
    lastName:string;
    id:number;
    birthDate:Date;
    numPhone:number;
    address:string;
    email:string;
    numFile:number;
    startDate:Date;
    
    constructor(name:string,lastName:string,id:number,birthDate:Date,numPhone:number,address:string,email:string,numFile:number,startDate:Date){
        this.name=name;
        this.lastName=lastName;
        this.id=id;
        this.birthDate=birthDate;
        this.numPhone=numPhone;
        this.address=address;
        this.email=email;
        this.numFile=numFile;
        this.startDate=startDate;
        

    }
}