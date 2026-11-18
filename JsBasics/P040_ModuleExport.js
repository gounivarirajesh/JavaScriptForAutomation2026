



//export data
export let pi =3.14;

console.log(pi);

// export class 
 export class StudentInfo{
    
    id;
    name;

    constructor(sid,sname){
        this.id=sid;
        this.name=sname; 

    }

    getinfo()
    {
        console.log("Student ID:",this.id+"\nStudent Name :"+this.name);

    }


 test(){
        console.log("getting data from P040 to P041 file ");
    }
}

let s1=new StudentInfo(123,"Rajesh");

console.log(s1);
s1.getinfo();

