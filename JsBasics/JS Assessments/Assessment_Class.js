/* Assignments On Class
======================
JavaScript Class Problem Statements 

Program 1: Create a Student Class 
Problem Statement: 
Create a Student class with properties name, age, and course. Create 
two objects and display their details. 

*/

class Student{
    name;
    age;
    course;

constructor(name,age,course)
{
    this.name=name;
    this.age=age;
    this.course=course;

    console.log("Name :",name,"\nAge :",age,"\nCourse :",course);
    /*
    first object output
    Name : Rajesh 
       Age : 22 
       Course : Playwright 

    second object output
      Name : Vishnu 
      Age : 43 
      Course : Selenium Java   
       */
}
studentDetails()
{
    this.name;
    this.age;
    this.course;
    console.log("Name :",this.name,"\nAge :",this.age,"\nCourse :",this.course);
/* 
Name : Rajesh 
Age : 22 
Course : Playwright */
}
}
let object1=new Student("Rajesh",22,'Playwright');
object1.studentDetails();


let object2=new Student("Vishnu",43,"Selenium Java");





/* Program 2: Bank Account Class 
Problem Statement: 
Create a BankAccount class with the following: 
• accountHolder  
• balance  
• deposit()  
• withdraw()  
• checkBalance() 
 */

class BankAccount{

    accountHolder;
    balance;
    depositAmount;
    withdrawAmount;
   
    constructor(accountHolder,balance,depositAmount,withdrawAmount)
    {
        this.accountHolder=accountHolder;
        this.balance=balance;
        this.depositAmount=depositAmount;
        this.withdrawAmount=withdrawAmount;

        console.log("constructor block")
    }
    desposit()
    {
     console.log("Account Holder :",this.accountHolder,"Depoisted Amount is :",this.depositAmount);
    }
    withDraw()
    {
    console.log("Account Holder :",this.accountHolder,"Withdraw Amount is :",this.withdrawAmount);
    }
    checkBalance()
    {
    console.log("Account Holder :",this.accountHolder,"Balance Amount is :",this.balance);
    }
}

let customer1=new BankAccount("Rajesh",20000,1000,1500);

customer1.desposit();
customer1.withDraw();
customer1.checkBalance();


/*
Program 3: Employee Class 
Problem Statement: 
Create an Employee class with name, salary, and 
department. Create a method that calculates a 10% bonus and 
displays the total salary.  */



console.log("--------------Program 3: Employee Class ----------------");

class Employee{
    name;
    salary;
    department;

    constructor(name,salary,department)
    {
        this.name=name;
        this.salary=salary;
        this.department=department;
      console.log("Employee Name :",name,"\nSalary :",salary,"\nDepartment :",department);  
    }
    calBonus(){
        let bonus=(this.salary*(10/100));
        let totalsalary=this.salary+bonus;
        return "\nAfter Addding 10% Bouns, Total Salary is :"+totalsalary;

    
    }
    
}

let emp=new Employee('Rajesh',450000,"Test Engineer");

//console.log(emp.calBonus());

console.log("---------------------");
console.log("Employee Name :",emp.name,"\nSalary :",emp.salary,"\nDepartment :",emp.department,emp.calBonus());

console.log(emp.name);





