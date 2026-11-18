


// sum of two numbers

function addTwo(a,b){

return a+b;
}

console.log(`Sum of two numbers :${addTwo(10,20)}`);


// Square a number

function Sqr(num)
{
return Math.sqrt(num);
}
console.log("Square root of a number:",Sqr(4));


//SwapNumber
let x=22;
let y=33

console.log(`Before swapping`,x,y);

let temp;//temporary variable 
temp=x; //temp =10
x=y; //a=20
y=temp;//b =10


console.log(`After swapping `,x,y);



//destructuring way 

let c=30;
let d=40;

 [c, d] = [d, c];

console.log(`After swapping `,c,d);


let a = 10;
let b = 20;

console.log("Before swapping:", a, b);

[a, b] = [b, a];

console.log("After swapping:", a, b);


/*How to generate random number in JS

//random() -Returns a pseudorandom number between 0 and 1.

 Ceil() method it return number 

 Math.ceil(x: number): number -Returns the smallest integer greater than or equal to its numeric argument.


*/

function getRandomNum(){
    //return Math.random(); // 0 to 1 range ( you will get decimal values)

   return  Math.ceil(Math.random()*40)
}

for (let index=0;index<5;index++)
{
console.log(getRandomNum());
}



//check the num is -ve +ve number


// function checkNumber(num){

// }

let checkNumber = (a,b) => a+b;

console.log(checkNumber(10,20));


let checkNo = (number)=>{

    if (number==0)
        return 0;
    else
        return "Not Zero";
}
console.log(checkNo("0"));


let numCheck=(num)=>{
    if(num===0)
        return `${num}: is  Zero`;
    if(num<0)
        return `${num}: is Negitive Number`;
    if(num>0)
        return `${num}: is Postive Number`;
}

console.log(numCheck(0));
console.log(numCheck(12));
console.log(numCheck(-2));


//Odd Even Number checking

let checkOddEven= (checknumber)=>{
    if(checknumber%2===0)
        return `${checknumber} is Even Number`;
    else
        return `${checknumber} is Odd Number`;

    
}
    
console.log(checkOddEven(20));
console.log(checkOddEven(27));
console.log(checkOddEven(52));

