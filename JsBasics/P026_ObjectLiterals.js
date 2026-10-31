
//Object

let employeeDetailss={
            empName:"Rajesh",
            empID :2022233,
          empMail :"rajesh123@outlook.com",
          empProject:["LBG",'HSBC','ICIC','HDFC','SBI'],
          feature :function()
          {
                console.log("this is feature() function")
          }
}
 
console.log(employeeDetailss);

 console.log(typeof employeeDetailss);


 //. dot notation
console.log("-------------- . dot  notation --------------------")
 console.log("Employee Name : ",employeeDetailss.empName);

 console.log("Employee ID :",employeeDetailss.empID);

 console.log("Employee MailId : ",employeeDetailss.empMail);

 console.log("Employee Project :",employeeDetailss.empProject[0]);

 employeeDetailss.feature()



 console.log("--------------[] square notation --------------------")
 // [] square notation

 console.log("Employee Name : ",employeeDetailss['empName']);

 console.log("Employee ID :",employeeDetailss['empID']);

 console.log("Employee MailId : ",employeeDetailss['empMail']);

 console.log("Employee Project :",employeeDetailss['empProject'][0]);

 employeeDetailss['feature']();


//how to iterate object - with help of { for in loop}


let studentData={
                fname:"Praveen",
                id:401,
                class:"5th",
                percentage:95

}

for(let i in studentData){
    console.log(i);

/* 
Output :
 I can get only key, How to get value as well let me use array
fname
id
class
percentage */
}

for(let i in studentData)
{
    //console.log("---------------")
   // console.log(studentData[i]);

    console.log(i,":",studentData[i]);

}



//other way we can call the keys and values by using Object interface 




let employ={

    emname:"Pavan",
    emphone:9034353242,
    empsal:3524524,
    empaddress:"Bengaluru"
}

console.log(employ);


let allkeys=Object.keys(employ);

console.log(allkeys);


let allvalues=Object.values(employ);

console.log(allvalues);



let allEntries=Object.entries(employ);

console.log(allEntries);


//Object - read,insert,delete, modify


let castCrew={
        moviename:"Durandhar",
        releaseDate:"19-Mar-2027",
        Actor:"Rajesh",
        Actress:"Anusha",
        Director:'Raghavapudi',
        tickets:1234
        
}

//read
console.log(castCrew);
//modify
console.log(castCrew.moviename="Fauzi");
console.log(castCrew.Actor='Prabhas');
console.log(castCrew.Actress="Imanvi")

//insert
console.log(castCrew.totalNumberofworkers=20000);
console.log(castCrew.movieBudget="250CR");
console.log(castCrew.producer="Bhushan Kumar");

console.log(castCrew.Todelete="please delete me");

console.log(castCrew.productionCompany="T-Series and MMM")


//delete

delete castCrew.Director;
delete castCrew.Todelete;


console.log("After Reading,Insertion,Modification,Delete Object")
console.log(castCrew);










