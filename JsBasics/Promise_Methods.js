/* 
Promise Methods
---------------
To run multiple promises in parallel
all()
race()
allsetteled()

*/

let p1=new Promise((reslove,reject)=>{
    setTimeout(() => {
    reslove("Task-1 has completed")
    }, 1000);

})

/* let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Task-2 has Rejected...")
    }, 2000);
})
 */

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task-2 has completed...")
    }, 2000);
})



let p3 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task-3 has Completed...")
    }, 3000);
})
/* 

all():

Creates a Promise that is resolved with an array of results 
when all of the provided Promises resolve, or rejected when any Promise is rejected. */

Promise.all([p1,p2,p3]).then((result)=>{console.log(result);}).catch((error)=>{
    console.log(error);
})


/* 

then():

The callback to execute when the Promise is resolved.

Attaches callbacks for the resolution and/or rejection of the Promise.

@returns — A Promise for the completion of which ever callback is executed. 


catch():

(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>
Attaches a callback for only the rejection of the Promise.

@param onrejected — The callback to execute when the Promise is rejected.

@returns — A Promise for the completion of the callback.



*/


let p11=new Promise((reslove,reject)=>{
    setTimeout(() => {
    reslove("Task-1 has completed")
    }, 3000);

})

let p22=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Task-2 has Rejected...")
    }, 2000);
})


// let p22=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Task-2 has completed...")
//     }, 2000);
// })



let p33 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task-3 has Completed...")
    }, 1000);
})
/* 

all():

Creates a Promise that is resolved with an array of results 
when all of the provided Promises resolve, or rejected when any Promise is rejected. */

Promise.race([p11,p22,p33]).then((result)=>{console.log(result);}).catch((error)=>{
    console.log(error);
})


//allsetteled() method 
/* 
allsettled();
(method) PromiseConstructor.allSettled<[Promise<any>, Promise<any>, Promise<any>]>(values: [Promise<any>, Promise<any>, Promise<any>]): Promise<[PromiseSettledResult<any>, PromiseSettledResult<any>, PromiseSettledResult<any>]> (+1 overload)
Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

@param values — An array of Promises.

@returns — A new Promise.
*/

let p55=new Promise((reslove,reject)=>{
    setTimeout(() => {
    reslove("Task-1 has completed")
    }, 3000);

})

let p66=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Task-2 has Rejected...")
    }, 2000);
})


// let p22=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Task-2 has completed...")
//     }, 2000);
// })



let p77 =new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Task-3 has Completed...")
    }, 1000);
})

Promise.allSettled([p55,p66,p77]).then((result)=>{console.log(result)}).catch((error)=>{
    console.log(error);
})