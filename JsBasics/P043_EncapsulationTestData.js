import{EmployeeData} from "./P042_Encapsulation.js";

let emp1=new EmployeeData(987,"lakshmi");
emp1.getData();
console.log("Actual Salary :"+emp1.getSalary());

console.log(emp1.setSalary(300000));

console.log("---------- Second Object ------")


let emp2=new EmployeeData(2222,"Pankaj");
console.log(emp2);
emp2.getData();
console.log(emp2.setSalary(4534543));


