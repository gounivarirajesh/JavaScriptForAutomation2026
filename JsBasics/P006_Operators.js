/*
JavaScript Opeartors 
=======================

Arthemetic operator;
--------------------
+,-,*,%,/


Unary Operator:
---------------
Peform operations on one operand
++ increment operator 
-- decrement operator 


3. Relational Operator
---------------------

>, >=, <, <= ,!==,!===



equal to 
---------

loose equality ==
strict equality ===




4. Ternary operator/ if - else 
    ---------------------------
condition ? true: false;



5. Logical operators
----------------------
1.&&(AND),2.||(OR) 3.!(NOT)



*/

let num1=10,num2=20;
console.log(num1+num2);

console.log("Addition of two number:"+num1+num2);
console.log("Sum of two num :", (num1+num2));

console.log("Substraction of two number:" + (num2-num1));
console.log("Multiplication of two number:" + (num2*num1));
console.log("Division of two number:" + (num1/num2));
console.log("Modules operator :", (num1%num2));

//Interview question 

console.log(-180/0) //Infinity
console.log("hello"/0) // Not a number (NaN)
console.log(undefined*100) //(NaN)
console.log(0/10); // 0
console.log(0/0); // NaN
console.log(null/100); //0


//Number Constructor

console.log("True -->",Number(true))
console.log("False -->",Number(false))
console.log("Null -->",Number(null))
console.log("Undefined. -->",Number(undefined))
console.log("Number: -->",Number(123))

/* Increment operators(Pre/post increments)

Pre increment
--------------
++pre

 Value will increment and we use that value and if you print same varibale it will update same value

*/
console.log("***************** Pre Increment operator *****************")
let pre=10;
console.log(pre);//. 10
console.log(++pre); // pre=pre+1 pre =10+1 pre=11
console.log(pre) //


let p=20;
console.log(p) //20 
console.log(++p) //21
console.log(p) //21



console.log("***************** Post Increment operator *****************")

let post=10;
console.log(post); //10
console.log(post++); //post =10  //10+1 ==>11 in post increment the will assing first next print statement it will print
console.log(post)// 11

console.log("*****************  Pre Decrement operator *****************")
// pre decement
let dec=100;
console.log(dec) //100
console.log(--dec) //99 dec=dec-1. 100-1=99
console.log(dec) //99

console.log("*****************  Post Decrement operator *****************")

let postdec=100
console.log(postdec); // 100
console.log(postdec--) // 100
console.log(postdec) //99



let j=10;
let i=j++; //j =j+1 10+1 =11 post increment opeator 10

console.log(i) //10
console.log(j) //10


console.log("************* b=aa++ *********")
let a=100;
let b=a++; // a=a+1 ==> a=100+1 => 101 ( here value will not assign to b because of post increment rule)

console.log(b) // 100
console.log(a) //101



for(;;)
{
console.log("hell world ")
}


let m=1;

while(m<=4)
{
 console.log("Hello madam")
}












