// Rest parameters

/* 
...spread operator- which is used to copy array and object type
when we use ...(three dots) with respective function then it is called rest parameters

rest parameter is used to design Dynamic function 
rest parameter should be last parameter of function 
*/


function getEmpoyeeDetails(id,name,...skills){
    console.log("Employee id :",id,"\nEmployee Name :",name,"\nEmployee skills :",skills);
}
getEmpoyeeDetails(1234,"John","JavaScript","TypeScript","PlayWright");



