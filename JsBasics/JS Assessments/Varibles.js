
/*
1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.
*/
//25
let  num= 25;
console.log(num);//25
console.log(typeof num);//number

//"JavaScript"

let Programname="JavaScript"
console.log(Programname);//JavaScript
console.log(typeof Programname);//string


//true
let IsCheckPoint=true;
console.log(IsCheckPoint);//true
console.log(typeof IsCheckPoint);//boolean

//Undefined
let undefinedtype=undefined;
console.log(undefinedtype);//undefined
console.log(typeof undefinedtype);//undefined


let nullvalue=null;
console.log(nullvalue);//null
console.log(typeof nullvalue);//object

// - 123.45

let decemalvalue=123.45;
console.log(decemalvalue)//123.45
console.log(typeof decemalvalue);//number



// - 12345678901234567890n

let bigInteger=12345678901234567890n

console.log(bigInteger);//12345678901234567890n
console.log(typeof bigInteger);//bigint




// - Symbol("id")

let sy= Symbol("id");
console.log(sy);//Symbol(id)
console.log(typeof sy);//symbol



// 2. Create Variables of Different Datatypes

// Create one variable for each of the following datatypes:
// - String

let Name = "Rajesh"
console.log(Name);//Rajesh
console.log(typeof Name);//string


// - Number

let EmployeeId=20313212

console.log(EmployeeId);//20313212
console.log(typeof EmployeeId);//number



// - Boolean

let bulbIsOn=true;
let bulbIsOff=false;

console.log(bulbIsOn);//true
console.log(typeof bulbIsOn);//boolean

console.log(bulbIsOff);//false
console.log(typeof bulbIsOff)//boolean



// - Undefined


let city;
console.log(city)//undefined
console.log(typeof city);//undefined

// - Null

let contactdetails="9030802064";
contactdetails=null;
console.log(contactdetails);//null
console.log(typeof contactdetails);//object



// - BigInt

let TransactionNumber=12343948483902938439n;
console.log(TransactionNumber);//12343948483902938439n
console.log(typeof TransactionNumber);//bigint


// - Symbol
let username=Symbol("Rajesh@123")
console.log(username);//Symbol(Rajesh@123)
console.log(typeof username);//symbol

// - Object

let employeeDetails={
    Name:"Rajesh",
    lastName:"Gounivari",
    EmpID:"134323"
}

console.log(employeeDetails);

console.log(typeof employeeDetails);
// Print all variables



// 3. Predict the Output
// Without running the code, predict the output:
console.log(typeof 100); //->number
console.log(typeof "100");//->string
console.log(typeof true);//->boolean
console.log(typeof undefined);//-->undefined
console.log(typeof null);//-->object
console.log(typeof 100n);//-->bigInt



// 4. Student Information
// Create variables to store:
// - Student name

let StudentName="Chintu"
console.log("Student Name : ",StudentName);
console.log(typeof StudentName)
// - Student age
let StudentAge=24;
console.log("Student Age : ",StudentAge);
console.log(typeof StudentAge);


// - Student percentage
let studentPer=78.34;
console.log("Student Percentage :",studentPer);
console.log(typeof studentPer);

// - Whether the student has completed the course
let StudentCourse="Yes";
console.log("Whether the student has completed the course ?"+StudentCourse,"Completed The course");
console.log(typeof StudentCourse);

// - Student's grade
let StudentGrade="A++"
// Use appropriate JavaScript datatypes.
console.log("Student Grade "+StudentGrade);
console.log(typeof StudentGrade);

// 5.Create two variables:
// let userName;
// let userEmail = null;
// Print both values and their datatypes.

let userNamee;
let userEmail=null;

console.log(userNamee);//undefined
console.log(userEmail);//null

/*
// Then answer:
// 1. What is the difference between undefined and null?
undefined: 
Undefined is a datatype in JS
Undefined is a primitive datatype ,
if you are not assigned any value to the variable it acts like a undefined
if you are not assigned any data to that variable , whenever you print that variable will get undefined output
if you print the typeof undefined variable,you will get undefined type 

Null:
Null is a datatype in Js 
Null is a primitive datatype
if you assigned to a variable as  null, then it is knows as null type 
Here we are speccifying as null to respective variable 
whenever check what typeof datatype of null, it is an a object type





// 2. What does typeof userName return?

The typeof userNamee return - Undefined type 

// 3. What does typeof userEmail return?

The typeof userEmail return - object type
// 4. Why is typeof null considered unusual in JavaScript?

Because it returns object instead of null, this is well known historical bug in js that has been kept for backward compatibility

let value =null;

if(value === null)
{
console.log(value)

}

*/

let value =null;

if(value === null)
{
console.log(value) //null

}

/*

Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3); 123
2.console.log(1 + 2 + "3"); 33
3.console.log("5" * true); //undefined
4.console.log(10 > 5 > 1);//true
5.let a = 2; 
    let b = a++ + ++a;  //
    console.log(a, b);

6.let a = 3;
console.log(a++ + a++ + ++a);

7.console.log(5 * 2 == "10");

8.
let x = 1;
let y = ++x + x++ + x;
console.log(x, y);

9.console.log(10 > 5 && 20 < 30); T&&T -->T

10.console.log(null || undefined || "Playwright"); // Playwright 


*/

console.log(1 + "2" + 3); 123
console.log(1 + 2 + "3"); 33
console.log("5" * true); // 5*1 =5
console.log(10 > 5 > 1);//false


let a = 2; 
    let b = a++ + ++a;  
    console.log(a, b);



console.log(null || undefined || "Playwright");

