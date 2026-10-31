/* Assignment1: 
Problem: 
Count the number of words in a sentence. 
Input: “I am learning javascript” 
Output: 4  */

let countNum= 'I am learning javascript';

let cn= countNum.split(",");


let result =cn.join(",").length;
console.log(result);

console.log(cn);

console.log(countNum);

//how to reverse any string ?

let reverseString="Hello"; 
//.                01234   

console.log(reverseString);

let res='';  
for(let i=reverseString.length;i>=0;i--) 
    
    // i =4 ; 4>=0 
    // i=3  ; 3>=0
    // i=2  ; 2>=0
    // i=0  ;1>=0
    // i=0  ;0>0    
    {
    res=res+reverseString.charAt(i);
 
    //res=""+o ->res=o
    //res=o+l
    //res=ol+l
    //res=oll+e
    //res=olle+H
    //res=olleH


}
console.log(res);

console.log(1+2);


