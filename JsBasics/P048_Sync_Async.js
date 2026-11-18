
/*

Syncronous: A code that runs one line at a time & wait foreach task to finish before moving to the next


Asynchronous: A code that does not wait for a task to finish and moves to the next line handling the result later
*/

//Synchronous program

//step by step execution, best example is for loop

for (let i=1;i<=5;i++)
{
    console.log("Hello!");

}



console.log("Program started....");

setTimeout(() => {
    console.log("Task required 3sec to complete")
}, 5000);


console.log("Program ended....");



let respone =fetch("https://www.google.com/");

console.log(respone);//Promise { <pending> }

//Modern technique we use async/await keywords

//traditional approach : then() and catch() to handle promise


//'await' expressions are only allowed within async functions and at the top levels of modules.

async function apiresp()
{
    let respone = await fetch("https://www.google.com/");
    console.log(respone);
}

apiresp();

/* Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>
Creates a new Promise.
*/

let orderpromise=new Promise((reslove,reject)=>
{
let orderstatus=true;

if(orderstatus)
{
    reslove("Order received...")
}
else{
    reject("Order cancled/rejected")
}

});



// How to design any asynchronous promise...?  -> Extra time to finish


let orderstatus = new Promise((resolve,reject)=>{

    let orderstatus=true;

    setTimeout(() => {
        if(orderstatus)
        {
            resolve("Order Received");
        }
        else{
            reject("Order Rejected....")
        }
        
    }, 3000);
})

console.log(orderstatus);


// to settled any promise we use .then() and catch()

    orderstatus.then((successresult)=>{
                console.log("Order status is",successresult);
    }).catch((error)=>{
        console.log("Order Reject status",error);
    })





       
