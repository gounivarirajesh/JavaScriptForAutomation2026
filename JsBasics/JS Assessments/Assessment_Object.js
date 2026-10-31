/*  Assignments on Object
============================
Program 1. Student Object 
Create a student object with the following properties: 
• id  
• name  
• age  
• course  
• marks  
Perform the following: 
1. Print the complete object.  
2. Print the student's name.  
3. Print the student's marks.  
4. Change the student's course.  
5. Update the student's marks.  
6. Add a new property city.  
7. Delete the age property.   */



let student={
            id:"16AK1A0562",
            name:"Rajesh",
            age:24,
            course:"Btech",
            marks:70
}
console.log(student);/* {
  id: '16AK1A0562',
  name: 'Rajesh',
  age: 24,
  course: 'Btech',
  marks: 70
} */
console.log(student.name);//Rajesh
console.log(student.marks);//70

console.log(student.course='CSE')//CSE
console.log(student.marks=90);//90
console.log(student.college="JNTU");//JNTU

delete student.age;

console.log(student);/* {
  id: '16AK1A0562',
  name: 'Rajesh',
  course: 'CSE',
  marks: 90,
  college: 'JNTU'
} */






/* Program 2. Employee Object 
Create an employee object containing: 
id 
name 
department 
designation 
salary 
Perform: 
1. Access each property using dot notation.  
2. Access each property using bracket notation.  
3. Update the salary.  
4. Add a location property.  
5. Delete the designation property.  */

let employee={
    id :20313212,
    name:"Rajesh",
    designation:"Software Test Engineer",
    salary:60000,
}
//1. Access each property using dot notation.  
console.log(employee.id);//20313212
console.log(employee.name);//Rajesh
console.log(employee.designation);//Software Test Engineer
console.log(employee.salary);//60000

//2. Access each property using bracket notation.  
console.log(employee["id"]);//20313212
console.log(employee["name"]);//Rajesh
console.log(employee["designation"]);//Software Test Engineer
console.log(employee["salary"]);//60000

//3. Update the salary.  
console.log(employee.salary="89000");//89000
//4. Add a location property.  
console.log(employee.location="Bengaluru");//Bengaluru
//5. Delete the designation property. 
delete employee.designation;

console.log(employee);
/* {
  id: 20313212,
  name: 'Rajesh',
  salary: '89000',
  location: 'Bengaluru'
} */






/* program 3.Create a testData object containing: 
username 
password 
browser 
environment 
timeout 
Use Object.keys() to: 
1. Get all property names.  
2. Count the number of properties.  
3. Check whether username exists. 
 */

//
let testData={
 username:"gounivarirajesh",
 password:"rajesh1223@",
 browser:"Webkit",
 enviroment:"QA",
 timeout:50000
}
//1. Get all property names.  
let objectKey=Object.keys(testData);
console.log(objectKey);//[ 'username', 'password', 'browser', 'enviroment', 'timeout' ]

//2. Count the number of properties.

console.log(Object.keys(testData).length)//5

//3. Check whether username exists. 

let searchUsername="username";
for(let i=0;i<objectKey.length;i++)
{
if(objectKey[i]===searchUsername)
{
    console.log("UserName is exists "+objectKey[i]);

}
else{

    console.log(i+" --> Other keys ",objectKey[i]);
}

}




/* 
Program 4.Create an object containing test configuration: 
browser: "chromium" 
headless: true 
timeout: 30000 
retries: 2 
Use Object.values() to: 
1. Display all values.  
2. Check whether "chromium" exists.  
3. Count the number of configuration values. 
 */


console.log("------------Program 4.Create an object containing test configuration:---------------")
let testConfig={
browser: "chromium" ,
headless: true ,
timeout: 30000 ,
retries: 2 
}

// Use Object.values() to: 
// 1. Display all values.  
let valuesDisplay=Object.values(testConfig)
console.log(valuesDisplay);




// 2. Check whether "chromium" exists.  

// One-way using methods 
let checkchroium=Object.values(testConfig).includes("chromium");

console.log(checkchroium);

// Another way
let searchvalue="chromium";
for(let i=0;i<valuesDisplay.length;i++){
if(searchvalue===valuesDisplay[i])
{
console.log(valuesDisplay[i]+"Values is exists");

}
else{
    console.log(i," -->Other values ",valuesDisplay[i]);

}
}



// 3. Count the number of configuration values. 


console.log(valuesDisplay.length);



/* Program 5.Create a user object: 
username 
role 
department 
experience 
Use Object.entries() to print: 
username : standard_user 
role : tester 
department : QA 
experience : 5 
 */

let userObject={
username : "standard_user",
role : 'tester' ,
department : 'QA', 
experience : 5 
}

let ObjectEntries=Object.entries(userObject);
//console.log(Object.entries(userObject));
console.log("--------------Object Entries ---------------")
console.log(ObjectEntries);
//console.log(ObjectEntries.join(":"));


console.log("------------------------")
for(let i=0;i<ObjectEntries.length;i++)
{

  console.log(ObjectEntries[i].join(":"))
} 
/*
Result: 

username:standard_user
role:tester
department:QA
experience:5
 */



/* Program 6.Create: 
const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 
Create a new object that: 
• Contains all properties of user.  
• Changes role to "Automation Engineer".  
• Adds experience: 5.  
The original object should remain unchanged. 
 */
const user = { 
name: "John", 
role: "Tester", 
city: "Pune" 
}; 

const userduplicate={...user };
console.log(userduplicate);
console.log(userduplicate.role="Automation Engineer");

console.log(userduplicate);
console.log(userduplicate.experience=5);
console.log(userduplicate);/* {
  name: 'John',
  role: 'Automation Engineer',
  city: 'Pune',
  experience: 5
}
 */


/*
Program 7.Playwright Configuration Object 
Create a configuration object: 
browser 
baseURL 
headless 
timeout 
retries 
Example: 
{ 
} 
browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
Perform: 
1. Print all configuration values.  
2. Change the browser.  
3. Change the timeout.  
4. Add screenshot: "only-on-failure".  
5. Check whether retries exists.  
6. Create a copy with a different baseURL.   

*/

let configObj ={
  browser: "chromium", 
baseURL: "https://example.com", 
headless: true, 
timeout: 30000, 
retries: 2 
}

let cObject=Object.values(configObj);
console.log(cObject);

console.log(configObj.browser="Safari");
console.log(configObj.timeout="60000");
console.log(configObj.screenshot="only-on-failure")

let kObject=Object.keys(configObj);

let checkRetries=kObject.includes("retries");

console.log(checkRetries);

// Another way
let searchvObject="retries";
for(let i=0;i<kObject.length;i++){
if(searchvObject===kObject[i])
{
console.log(kObject[i]+" key is exists");

}
/* else{
    console.log(i," -->Other values ",kObject[i]);

} */
}



