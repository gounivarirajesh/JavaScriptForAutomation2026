

console.log("Hello World!"); // This is a single line comment


/*


Varibale: 
Varibale is a container that holds data values. In JavaScript, we can declare a variable using the keywords var, let, or const.

// Data types in JavaScript
Data type define what type of data can be stored in a variable. In JavaScript,
As a loosely typed language, JavaScript does not require you to declare the data type of a variable when you create it. The data type is determined automatically based on the value assigned to the variable.



there are 3 types of data types in JavaScript:
 Var(older/not recommended), let(mutable data type), const(immutable data type).


 Var: is used to declare a variable, it can be reassigned and redeclared.
      In modern javascript it is not recommended to use var , it is deprecated and can lead to unexpected behavior.

      syntax: var variableName = value; 
            Example: var name = "John";


Let: is used to declare a variable, it can be reassigned but not redeclared in the same scope.

      it is recommended to use let instead of var, as it has block scope and is more predictable.
      it is mutable, meaning its value can be changed.

sytax: let variableName = value;
        example: let age = 30;


Const: is used to declare a variable, it cannot be reassigned or redeclared in the same scope.    
    it is immutable, meaning its value cannot be changed. However, if the value is an object or array, the properties or elements can be changed. 
syntax: const variableName = value;
        example: const pi = 3.14;

 Types of data types in JavaScript:
1. Primitive data types:(also known as value types): (7 types of primitive data types in JavaScript)

   - String: represents a sequence of characters, enclosed in single or double quotes.  
  
  
  
   - Number: represents numeric values, both integers and floating-point numbers.
   ( byte-> int-> long-> float-> double) in java but in javascript all are number type.
    8byte-> 16byte-> 32byte-> 64byte in java but in javascript all are number type.

    let num1= 91;
    console.log(typeof num1); // Output: "number"


    console.log(typeof 42); // Output: "number"
    console.log(typeof 3.14); // Output: "number"
    console.log(typeof -1); // Output: "number"
    console.log(typeof 0); // Output: "number"
    console.log(typeof NaN); // Output: "number"
    console.log(typeof Infinity); // Output: "number"


   - Boolean: represents a logical value, either true or false.
   - Undefined: represents a variable that has been declared but has not been assigned a value.
   - Null: represents the intentional absence of any object value.

    Added in ES6:(EcmaScript 2015)
   - BigInt: represents integers with arbitrary precision, allowing for the representation of very large numbers.
   - Symbol: represents a unique and immutable value, often used as an identifier for object properties.    
   

2. Non-primitive data types (also known as reference types):

In javascript all objects are dynamic objects and object array
    - Object: represents a collection of key-value pairs, where each key is a string and the value can be any data type.




*/


/*

let num1=10;
console.log(num1);
console.log(num1);
num1="Rajesh";

console.log(num1);

let num2=-101;
console.log(num2);

let num3=3.14;
console.log("this is pi value "+num3);

let firstName="John";
let lastName="Doe";
let fullName=firstName+" "+lastName;
console.log(fullName);


// type of operator: is used to determine the data type of a variable or value. It returns a string indicating the type of the operand.
// syntax: typeof operand
console.log(typeof num1 ); // Output: "string"
console.log(typeof num2); // Output: "number"
console.log(typeof num3); // Output: "number"
console.log(typeof firstName); // Output: "string"
console.log(typeof lastName); // Output: "string"
console.log(typeof fullName); // Output: "string"


//Number(). constructor in javascript is used to create a new Number object or convert a value to a number. 
// It can be called as a function or used with the new keyword to create a Number object.
//  When called as a function, it converts the argument to a number if possible, otherwise it returns NaN (Not-a-Number).
//  When used with the new keyword, it creates a Number object that wraps the numeric value.
// syntax: Number(value)
// example:
let num4=Number("123");
console.log(num4); // Output: 123
console.log(typeof num4); // Output: "number"

let num5=Number("abc");
console.log(num5); // Output: NaN
console.log(typeof num5); // Output: "number"

let num6=new Number(456);
console.log(num6); // Output: [Number: 456]
console.log(typeof num6); // Output: "object"

 // Number properties in JavaScript:

 console.log("*********** Number Properties ************")  
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324
console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity
console.log(Number.NaN); // Output: NaN 


console.log("*********** MiN and Max Safe Integer ************")
console.log(Number.MIN_SAFE_INTEGER) // Output: -9007199254740991
console.log(Number.MAX_SAFE_INTEGER) // Output: 9007199254740991



// BigInt
let bigIntValue = 9007199254740991n; // The 'n' at the end indicates a BigInt literal
console.log(bigIntValue); // Output: 9007199254740991n
console.log(typeof bigIntValue); // Output: "bigint" 
console.log(typeof 9007199254740991n) // Output: "number"

let bigIntValue2 = -9007199254740991n; // The 'n' at the end indicates a BigInt literal
console.log(bigIntValue2); // Output: -9007199254740991
console.log(typeof bigIntValue2); // Output: "number"

*/
console.log("*********** Boolean true/false ************")


let isJavaScriptFun = true;
let isJavaScriptHard = false;

console.log(isJavaScriptFun); // Output: true
console.log(isJavaScriptHard); // Output: false

console.log(typeof isJavaScriptFun); // Output: "boolean"
console.log(typeof isJavaScriptHard); // Output: "boolean"  



