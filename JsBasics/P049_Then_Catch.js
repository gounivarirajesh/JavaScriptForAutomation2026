/* 

.then()
.catch()
*/

let normalway= new Promise((resolve,reject)=>{
    resolve("Promise is completed");
 });

 console.log(normalway);


 let setime=new Promise((reslove,reject)=>{
    setTimeout(() => {
        console.log("waited : 3sec ")
        console.log("Promise is done...")
    }, 3000);

 })
console.log(typeof setime);



//Modern syntax :

let modern= Promise.resolve("Promise Finished....")
console.log(modern);

modern.then((res)=>{
    console.log(res);
})

// reject Promise


let rejpromise=new Promise((reslove,reject)=>
{
    setTimeout(() => {
     reject("Promise Rejected .....")  
    }, 
2000);
})

console.log(rejpromise);

rejpromise.catch((rejected)=>{
console.log(rejected);

})

//Modern reject syntax

let modrej=Promise.reject("Promise Rejected");

modrej.catch((rejected)=>{
console.log(rejected);
})


//Promise with function 

function getStatus()
{
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Test case Passed...")
       // console.log("Function Promise passed!....")
    }, 2000);
})
}
//call
console.log(getStatus());

//way1:traditional way handling techinque using(.then())

getStatus().then((res)=>
{
    console.log(res);
})

//way2 : async and await keyword

/* To handle any promise use async function and method which returns promise before that use await
Any async function returns promise */


   async function testStatus()
    {
        console.log(await getStatus());
    }
testStatus();







