//PrimeNumber - a number which is divisable 1 and itself 
// 2,3,4,5,6,7
let num=10;
let flag;
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
for(let i=2;i<num;i++)
{
if(num%i===0){ 
    console.log(num,"Not a prime number");
        }
else
 {
     console.log(num,"is prime number");
 }
}


console.log("-------------------------------------------")

console.log("correct way to define prime number program")
//PrimeNumber - a number which is divisable 1 and itself 
// 2,3,4,5,6,7

let number1=5;
let flage1=true;
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
for(let i=2;i<number1;i++)
{
if(number1%i===0)
{
    flage1===false;
}


  if(flage1===true){
    console.log(number1," is  not Prime number")
   }
else
 {
     console.log(number1,"is  prime number");
 }
}

    
``