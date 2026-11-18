
/*
Call Back Function 
==================== 
when we pass function as arugument/parameter into another function the that will become a call back function. 
*/

//pre condition 

function getName(name){
console.log("Hello!",name);
}

function getData(data){
    console.log('this is User Data',data);
    
}

//business logic
function greet(name1,callbackfun){
callbackfun(name1);

}

//function calling

greet("Raj",getName);
greet("Lalitha",getData);




//Call back function using arrow function

let add =(num1,num2)=>{console.log("Addition :",(num1+num2))};
let mul =(num1,num2)=>{console.log("Multiplication :",(num1*num2))};
let division =(num1,num2)=>{console.log("Division :",(num1/num2))};
let substraction =(num1,num2)=>{console.log("Substraction :",(num1-num2))};



function Cal(a,b,callbkfun){
    
    callbkfun(a,b);

}

Cal(30,10,add);
Cal(40,20,mul);
Cal(20,10,division);
Cal(30,15,substraction);


// foreach : it will call the callbackfunction at once at a time 

/* (method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. */


let arr=[10,20,30,40,50];
//syntax :forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

//Performs the specified action for each element in an array.

arr.forEach((num)=>{console.log("forEach Method using,value is :",num)});


arr.forEach(function(element){
console.log("Every Element iterated Value",element);
console.log(element*element);
})


console.log("-----------------")
arr.forEach((num)=>{console.log(num*num*num)})


//Map - Calls a defined callback function on each element of an array, and returns an array that contains the results.

/* 

way
(method) Array<string>.map<void>(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void[]


Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

*/

let city =['Banglore','Mumbai','Chennai','Delhi'];

//convert every city name into uppercase
// array<string>.map(callbkfun:(value,index,array))

city.map((cityname)=> {console.log(cityname.toUpperCase())})


// --> another way 

let cities=city.map((cityname)=>{console.log(cityname.toUpperCase())})

console.log(cities)

console.log(typeof cities);


let covertedcity=city.map((citiesname)=>citiesname.toLowerCase());

console.log(covertedcity);

console.log(typeof covertedcity);

//Scenario : Before every link "Amazon as a prefix"

// Footer Links

let footerLink =["About us",'Help','Privacy Policy','Brand'];

console.log(footerLink);


let updatedlinks =footerLink.map((linkto)=>{console.log("Amazon "+linkto)});

console.log(updatedlinks);

console.log("-----------Other way ----------------")
let updated =footerLink.map((link)=>{ return "Amazon "+link});

console.log(updated);


let number=[1,2,3,4];
let result=number.map((num)=>{return num*num})
console.log(result);


let pricinfo=['$12','$23','$89','$35'];

console.log(pricinfo);

let priceremdollar =pricinfo.map((price)=>{
    return price.replace("$",'') //Replaces text in a string, using a regular expression or search string.
})
console.log(priceremdollar);


//filter()
/* 
filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.


Returns the elements of an array that meet the condition specified in a callback function.
*/
let elements=[1,2,3,4,5,6,7,8,9,10];
//find the even elements in an array

let even=elements.filter((num)=>{
return num%2===0;
})

console.log(even);

//.filter(): This method loops through every item in the array one by one, giving you its value and its current index (position).
//  It builds a new array containing only the items that return true.
let duplicate =[10,20,30,40,10,20,30,70,50];
// value 10,20,30,40,.......
//index  0,1,2,3,4,5 ......

let duplicateEle=duplicate.filter((value,index)=>{
    return duplicate.indexOf(value)!==index;
})

console.log(duplicateEle);



//reduce();
//sum of array elements

let data=[10,20,30,40];

//let data=['A','B','C','D']

let sum=0;
for(let i of data)
{
    sum=sum+i;

}

console.log(sum);


let res= data.reduce((sum1,num)=>{
    return sum1+num;
})

console.log(res);