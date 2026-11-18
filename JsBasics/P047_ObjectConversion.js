/* 
Object Conversion 
------------------

How to convert one object into another object ?

Scenarios:
-----------
API Testing
Data reading from JSON,CSV,Excel
Data Driven testing


How to convert JSON Object into json string object

JSON string into js object
*/

// Js object 
let student={
    id:1000,
    sName:"Priya",
    sAge:34,
    location:"bengalore"
}

console.log(typeof student);//object


//Json String
let payload=`{
    "username":"pawankalyan",
    "password":"kalyan@123",
    "totalrevenue":9000000,
    "depositepaid":true
}`

console.log(typeof payload);//string

//Strigify()


//how to convert js value to JSON string 
// By using stringify() method 
let json_string=JSON.stringify(student);
console.log(json_string);//{"id":1000,"sName":"Priya","sAge":34,"location":"bengalore"}
console.log(typeof json_string);//string


//How to convert JSON to JS Object

//parse() - To convert json string to js object


let jsobject=JSON.parse(payload);

console.log(jsobject);
/*
output :
{
  username: 'pawankalyan',
  password: 'kalyan@123',
  totalrevenue: 9000000,
  depositepaid: true
} */
console.log(typeof jsobject);//object


 
/*
Syncronous: A code that runs one line at a time & wait foreach task to finish before moving to the next


Asynchronous: A code that does not wait for a task to finish and moves to the next line handling the result later

*/




