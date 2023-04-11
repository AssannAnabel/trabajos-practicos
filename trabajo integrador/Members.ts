import { Person } from "./Person"

export abstract class Members implements Person{
    name:string;
    lastName:string;
    id:number;
    birthDate:string;
    numPhone:number;
    address:string;
    email:string;
    numFile:number;
    startDate:string;
    
    constructor(name:string,lastName:string,id:number,birthDate:string,numPhone:number,address:string,email:string,numFile:number){
        this.name=name;
        this.lastName=lastName;
        this.id=id;
        this.birthDate=new Date(birthDate).toLocaleDateString()
        this.numPhone=numPhone;
        this.address=address;
        this.email=email;
        this.numFile=numFile;
        this.startDate=new Date().toLocaleDateString()
        
        

    }
}