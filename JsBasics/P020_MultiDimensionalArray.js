
//Multidimention Array

let usercredentails =[

    ["admin","admin123","PasswordHint"],
    ["Rajesh","Rajesh#123","firstName"],
    ["Anusha","Anusha@123","SureName"],
    ["Lavanya","Lavi123","Nickname"]
]
/*
console.log(usercredentails);

console.log("Number of Rows : ", usercredentails.length); //Number of Rows :  4
console.log("Number of Columns :" ,usercredentails[0].length); //Number of Columns : 3


//How to access single entry in the array
console.log(usercredentails[1][0]); //Rajesh

console.log(usercredentails[3][3]);//undefined

console.log(usercredentails[5][6]) //TypeError: Cannot read properties of undefined (reading '6')

*/

// Array Iteration 
for(let row=0;row<usercredentails.length;row++)
{
 let rowwiseData = "";

 for(let cell=0;cell<usercredentails[row].length;cell++)
 {
    rowwiseData= rowwiseData+usercredentails[row][cell]+"   ";
 }
console.log(rowwiseData);
}




