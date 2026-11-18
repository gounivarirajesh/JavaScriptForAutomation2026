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
// 1.console.log(1 + "2" + 3); 123
console.log(1 + "2" + 3); 123

//2.console.log(1 + 2 + "3"); 33
console.log(1 + 2 + "3"); 33

// 3.console.log("5" * true); //undefined
console.log("5" * true); // 5*1 =5


//4.console.log(10 > 5 > 1);
console.log(10 > 5 > 1);//false


// 5.let a = 2; 
//     let b = a++ + ++a;  //
//     console.log(a, b);


console.log("-----Post Increment------------")
let postinc=5;
console.log(postinc);
postinc++;
console.log(postinc)


console.log("-----Pre Increment--------------")
let preinc=3;
console.log(preinc);
++preinc;
console.log(preinc);


console.log()

let a = 2; 
    let b = a++ + ++a;  
    console.log(a, b);





// 7.console.log(5 * 2 == "10"); //true
console.log(5*2=="10");



// 8.
// let x = 1;
// let y = ++x + x++ + x;
// console.log(x, y);
let x=1;
let y=++x + x++ + x;

console.log(x,y);


// 9.console.log(10 > 5 && 20 < 30); T&&T -->T

// 10.console.log(null || undefined || "Playwright"); // Playwright 

console.log(10 > 5 && 20 < 30);


console.log(null || undefined || "Playwright");
