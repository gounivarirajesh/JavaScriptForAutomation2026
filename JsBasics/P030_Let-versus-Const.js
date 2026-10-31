/*
-for Object declaration we can use let or const keywords
- all the operations we can perform on both variables and 
in case of const : only reference is immutable

reference: memory generated for that object
*/

// let 

let fname="Rajesh";
//let fname="Anusha";//Cannot redeclare block-scoped variable 'fname'.
    fname="Anusha";

console.log(fname);


//const 

 const num1=133; 
 //const num1=234;//Cannot redeclare block-scoped variable 'num1'.ts

 //num1="Siva"; //SyntaxError: Identifier 'num1' has already been declared


 console.log(num1);////TypeError: Assignment to constant variable.

 

//object 
// let keyword using to object 


let user1={
    name:"chotu",
    id:123
}

console.log(user1);
//insert

console.log(user1.class='4th');

//modify and delete

console.log(user1.name="krishna");

delete user1.id;

console.log(user1);


user1 ={
    firstvalues:'ABCD',
    lastvalues:"WXYZ"
}
console.log(user1);


console.log("***************************************")




let user2={ fname:"HTML",
    lname:'CSS',

}


user2={ fname:"JavaScript",
    lname:'TypeScript',
    

}

console.log(user2)


//const



const user3={ fname:"HTML",
    lname:'CSS',

}


user3={ fname:"JavaScript",
    lname:'TypeScript',
    

}

console.log(user3) //. user3={ fname:"JavaScript",    TypeError: Assignment to constant variable.
/*

const username1={ fname:"HTML",
    lname:'CSS',

}


const username1={ fname:"JavaScript",
    lname:'TypeScript',
    
//Cannot redeclare block-scoped variable 'username1'.
}
*/



