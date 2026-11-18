/*  What is function ?
    To define the group of statment which performs some functionality

    what is parameters?
    parameters are always represent variables, which we pass/decleare for function 

    what is arguments?
    Arguments are always represent real data which we pass while calling the function 


JS support 2 types of function

1.function declearation 
2.function expression  */

//Function declearation 

function test1()
{
    console.log("This is function decleartion calling")
}
test1();


//Function declearation with parameter

function addition(num1,num2)
{
console.log("Addition is :",(num1+num2));
}

addition(10,20);
addition("Hello",100);
addition(true,90);

//Function decleration with return keyword

console.log("-----Function decleration with return keyword-----")

// From function if you wanted to return the value/result the use return keyword
// return keyword it should be the last statement of function 
// In return statement either we can store value or we can store into variable
function test2()
{
    let greeting="Welcome to Js"
    return greeting; // "Hello All!"
}
//test2();
console.log(test2());// this is way of calling

console.log(test2.name);

let result=test2();// way of calling function 
console.log(result);

//Real time Scenario - Validate the Browser test cases(Chromium,Firefox,webkit)

function launchBrowser(browsername){
 switch (browsername) {
    case "Chromium":
        console.log("Test case is executing on Chromium")
        break;
    case "Firefox":
        console.log("Test case is executing on Firefox")
        break;
    case "webkit":
        console.log("Test case is executing on webkit")
        break;
    
    default:console.log("Wrong Browser! Test will start by default on chrome")
        break;
 }
}

launchBrowser("Chromium");
launchBrowser("Firefox")
launchBrowser("Opera")

// Anonymous Function 

let test3= function()
 {
console.log(" this anonymous function is calling")
 }

 test3();
 console.log(test3.name);


 // Anonymous function with parameters
/**
 * 
 * @param {string} username 
 * @param {string} password 
 */

 let dologin=function(username,password)
 {
    console.log("UserId :",username);
    console.log("password :",password);

    console.log("your login process Completed...");

 }

 dologin("Rajesh","admin@123");


 const mul=function(n1,n2){

    return n1*n2;
 }

 mul(2,3);
 console.log(mul(2,3));



 let browserLanch=function(bname)
 {
 switch (bname) {
    case "Chromium":
        console.log("Launch Chromium")
        return true;
        break;
    case "Firefox":
        console.log("Launch Firefox");
        return true;
        break;
    case "webkit":
        console.log("Launch webkit");
        return true;
        break;
    
    default:console.log("Wrong Browser!");
    return false;
        break;
 }

}

if(browserLanch("webkit")){
    console.log("Open Application..... ")
}
else{
    console.log("Skip this process....")
}




//Arrow Function or short hand function 

let test4= ()=>{
    console.log("Arrow function is calling ")
}

test4();
console.log(typeof test4);
console.log(test4.name);

// Arrow function with parameter

let arrowfun= (msg)=>
{
    console.log("Hello! "+msg);
}

arrowfun("Rajesh");

// we can keep without () round braket 
let arrowfun1= data=>{
    console.log(data);
}
arrowfun1("Welcome to Arrow function");
arrowfun1(1132423);


//multiple parameters

let arrowfun2=(num1,num2)=>{
    let a=40,b=10;
    console.log("Arrow function passing 2 parameters : "+(num1+num2));

    console.log("Subraction of two numbers",a-b);

    return "this is return type : doing multipliction "+num1*num2;

}

console.log(arrowfun2(10,10));

//Default parameter

function getdetails(coursename="Software testing ")
{
console.log("your Enrolled course is  :",coursename);
}

getdetails("Test Engineer");
getdetails("Manual testing ");
getdetails();// if you not passing coursename it will take default value which is assigned as Software testing 
