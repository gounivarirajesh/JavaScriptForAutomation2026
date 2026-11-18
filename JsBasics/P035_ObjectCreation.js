// Construction function 
/* 
Constructor function is used to create a object and intilize object 

Constructor function should start with capital letter

*/
//1.Object literal 
console.log("1.Object literal : Output")

let product ={
pid:101,
pname:"peanut Butter",
pprice:636
}
console.log(product);//{ pid: 101, pname: 'peanut Butter', pprice: 636 }


//2.Class level

console.log("2. Class Level : Output")

class Trainer{
    id;
    trainerName;

    constructor(id,name){
        this.id=id;
        this.name=name;
        
    }

    getData(){
        console.log("ID :",this.id);
        console.log("Name :",this.name);
    
    }
}

const trainee =new Trainer(123,"Priyanka");

trainee.getData();


// 3. constructor function : it is start with function name

console.log("3. constructor function : it is start with function name :Output")
function Employeee(id,name)
{
    this.id=id;
    this.name=name;
     this.show=function()
     {
        console.log("Employee Id :",this.id);
        console.log("Employee Name :",this.name);
     }
}
const employ=new Employeee(10000,"Smith");
employ.show();


//4.Prototype Based Object (Object.create())

// Creates an object that has the specified prototype or that has null prototype.


console.log("------4.Prototype Based Object (Object.create())------ : Output")

let foodproduct=Object.create(product);

console.log(foodproduct.pid);
console.log(foodproduct.pname);

foodproduct.name="Atom MultiVitamin Supplimentry";
foodproduct.pprice=508;


console.log(foodproduct);

console.log(product);



