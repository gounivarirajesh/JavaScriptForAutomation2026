/* 
finally():

*/


let paymentStatus =new Promise((resolve,reject)=>{

        let flag=true;
    setTimeout(() => {
        if(flag)
        {
         resolve("Payment Successfully...");
        }
        else{
            reject("{Payment Rejected ....");
        }
    }, 3000);
});

console.log(paymentStatus);


paymentStatus.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)}).finally(()=>{console.log("Payment process Completed....")})