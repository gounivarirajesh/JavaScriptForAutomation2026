/*
============================================
Assignments On function 
1. Calculate Test Score 
Create a function calculateScore() that accepts three marks 
and returns the total score. 
Requirements: 
• Accept three numbers as parameters.  
• Calculate the total.  
• Return the result.  
• Call the function and print the result. 


*/


function calculateScore(english,maths,science){

    let totalscore=english+maths+science;
    return totalscore;
}
let results =calculateScore(80,75,65)
console.log("Total Score of three numbers ",results);

/*

2. Check Test Status 
Create a function checkTestStatus() that accepts a test score. 
Rules: 
• Score >= 40 → "PASS"  
• Score < 40 → "FAIL" 


*/


function checTestStatus(score)
{
    if(score>=40)
    {
        console.log("Pass");

    }
    else if(score<40)
        {
            console.log("Fail");
    }

}

checTestStatus(40);
checTestStatus(35);




/*
3. Validate Username 
Create a function validateUsername(username). 
Rules: 
• Username must not be empty.  
• Username must contain at least 5 characters.  
• Return true if valid.  
• Return false otherwise. 

*/
function validateUsername(username)
{

    if(username===""||username.length<5){
        return false;
    }
        return true;


}
console.log(validateUsername("Rajesh"));
console.log(validateUsername());


//------------------------------------
const validateUsername = (username1) => 
    {
    return username1 !== "" && username1.length >= 5;
};

console.log(validateUsername("Rajesh")); // true
console.log(validateUsername("Ram"));    // false



//----------------------
const validUsername = (uname) => {
    return typeof uname === "string" && uname.trim().length >= 5;
};

let uname="Ramu"
console.log(typeof uname);//string



console.log(validUsername)
/*

4. Validate Login Credentials 
Problem Statement: 
Create a JavaScript function validateLogin() that accepts a 
username and password. The function should validate the 
credentials and return whether the login is successful or 
unsuccessful. 
Requirements: 
• Accept username and password as parameters.  
• Consider "admin" as the valid username.  
• Consider "admin123" as the valid password.  
• Return "Login Successful" when both are correct.  
• Otherwise, return "Invalid Username or Password". 


*/
let validateLogin= (username,password)=>{
return username==='admin'&& password==='admin123';
}


console.log(validateLogin("daff","dafaf"));
console.log(validateLogin("admin",'admin123'));



let loginvalidation =function(username,password){

if(username==="admin"&&password==="admin123")
{
console.log("Login Successful");
}
else{
    console.log("Invalid Username or Password");

}
}
loginvalidation("Ajay","ajay123");

loginvalidation("admin","admin123")



/* let resultss =validateLogin("rajesh","rajesh123");
if(resultss=true){
console.log("Login Successful");
}else if(resultss=false){
    console.log("Invalid username or password")
} */


// console.log(resultss);



/*
5. Validate Password 
Problem Statement: 
Create a function validatePassword() that accepts a 
password and validates it based on the following 
conditions: 
• Password must contain at least 8 characters.  
• Password must not be empty.  
• Password must contain at least one number.  
The function should return true if the password is valid; 
otherwise, return false. 
*/


let validatepassword = (password)=>{
return (password===password.trim() && password.length >=8) && /\d/.test(password);
//console.log(password);
///\d/.test(password) --> /\d/  / /--> regular expression// 
//  \d it will check [0-9] number 
// test() - Returns a Boolean value that indicates whether or not a pattern exists in a searched string. (String on which to perform the search)
//password.length.trim>9 && /\d/.test(password);
}

console.log(validatepassword("raj2"));
console.log(validatepassword("rajesh1234"));


//(password !=="" && password >=8) && /\d/.test(password);

/*



6. Browser Test Using Callback 
Problem Statement: 
Create a function runBrowserTest() that accepts a browser 
name and a callback function. 
The function should simulate executing a test on the 
specified browser and pass the browser name and test 
result to the callback. 
Requirements: 
• Accept browser and callback.  
• Execute the test for the specified browser.  
• Pass the browser name and test result to the callback.  
• Display the result. 

*/
const  cbrowser=(browsername)=>{

    console.log(browsername,"Browser");
    
}

function runBrowserTest(browsername,cbrowser)
{
cbrowser(browsername);

}
runBrowserTest("chrome",cbrowser);



/*

7. Display Browser Names Using forEach() 
Problem Statement: 
Create an array containing the following browser names: 
Chromium 
Firefox 
WebKit 
Use the forEach() method to display: 
Executing test on Chromium 
Executing test on Firefox 
Executing test on WebKit 
Requirements: 
• Use forEach().  
• Pass a callback function to forEach().  
• Do not use a traditional for loop. 

*/

let browsernames=['Chromium','Firefox','WebKit'];

browsernames.forEach((web)=>{
    console.log(web);

})



/*

8. Calculate Final Prices Using map() 
Problem Statement: 
Create an array containing product prices: 
1000, 2000, 3000, 4000 
Use the map() method with a callback function to calculate 
the price after adding 18% GST. 
The function should return a new array containing the 
updated prices. 
Expected Output: 
[1180, 2360, 3540, 4720] 

map() - Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

*/

let fincalPrices=[1000,2000,3000,4000];

fincalPrices.map((addGST)=>{

let result =addGST+((addGST*18)/100);
console.log(result);

})
// 1180
// 2360
// 3540
// 4720





/*
9. Filter Failed Test Cases 
Problem Statement: 
Create an array of test case objects containing the test 
name and test status. 
Example: 
[  
{ name: "Login Test", status: "PASS" }, 
{ name: "Search Test", status: "FAIL" }, 
{ name: "Checkout Test", status: "PASS" }, 
{ name: "Payment Test", status: "FAIL" } 
] 
Use the filter() method with a callback function to return 
only the failed test cases. */

/* 1/2
filter(predicate: (value: { name: string; status: string; }, index: number, array: { name: string; status: string; }[]) => value is { name: string; status: string; }, thisArg?: any): { name: string; status: string; }[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.
 */
let testcases =[  
{ name: "Login Test", status: "PASS" }, 
{ name: "Search Test", status: "FAIL" }, 
{ name: "Checkout Test", status: "PASS" }, 
{ name: "Payment Test", status: "FAIL" } 
] 

let failure=testcases.filter((failure)=>{
     if(failure.status==='FAIL')
        return true;

});

console.log(failure);
