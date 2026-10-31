
/* 
Object Destructuring :
it is a clean way to extract elements from array/object and store it into variable in same line 
*/


let prod=["Display",'Mouse','keyboard','HardDisk'];
// index    0            1       2           3 
console.log(prod);

console.log(prod.length);

console.log(prod.slice(1,3));
console.log(prod.slice(2));
console.log(prod.slice(-2));


//Destructuring array

//mobiles ->realme ,oppo,nokia,iphone,redmi,poco

let mobiles =['realme' ,'oppo','nokia','iphone','redmi','poco']

let [dm1,dm2,dm3,dm4,dm5,dm6,dm7]=mobiles;
console.log(dm1);//realme
console.log(dm2);//oppo
console.log(dm3);//nokia
console.log(dm4);//iphone
console.log(dm5);//redmi
console.log(dm6);//poco
console.log(dm7);//undefined



//Destructuring Object
 // *** Object variable name and key name should be same  
 
// destructuring : {}


//Object decleration 
let customer ={
    fname:"Rajesh",
    lname:"Gounivari",
    address:"Chittoor",
    postal:517424,
    custID:243324879234,
    profile:"QA",
    age:30,
    gender:'M'
}


//function 
function placeOrder({fname,lname,address,postal,custID})
{

    console.log(customer);
    
    console.log("FirstName: "+fname+"\nLastName : "+lname+"\nDelivery Address: "+address);
}

placeOrder(customer);// functioin calling 





