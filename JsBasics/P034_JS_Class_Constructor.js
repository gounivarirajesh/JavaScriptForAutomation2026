/*

Constructor 
In JS there is no Access Modifiers 
There is no intilization of value
Constructor helps you to intitlize  the values 

How to access any thing in the class ?
with help of Object creation we can access 

Object will create a out side of the class

How to create a Object in JS?
with the help of new keyword 

syntax: let student=new Student();

Constructor is a special method used to initialize the object
In Js only one constructor allowed
constructor get called  at the time of object creation (with new keyword)

this keyword: 
this keyword always refers current class instance(data/method)
*/





//class 
class StudentData{
//data 
 id;
fname;

constructor(id,fname)
{
this.id=id;
this.fname=fname;

}

getData(id,fname){
    console.log(this.id=id);
    console.log(this.fname=fname);
}

}
//object creation

const student=new StudentData();
student.getData(101,'Rajesh');

 


//Employee details

class Employee{


    eid;
    ename;
    eaddress;
    profile;
    salary;

    constructor(id,name,address,profile,salary)
    {
this.eid=id;
this.ename=name;
this.eaddress=address;
this.profile=profile;
this.salary=salary;
    }

      getInfo()
      {
    console.log("Employee id :"+this.eid+"\nEmployee Name :"+this.ename+"\nEmp address :",this.eaddress+"\nprofile :"+this.profile+"\nSalary :"+this.salary);
    }
}


let emp1=new Employee(101,"Rajesh","chittoor","QA",1211341);
emp1.getInfo();

console.log(emp1);



console.log(" Next Object creation");
let em2 =new Employee(102,"Mahesh");
em2.getInfo();


