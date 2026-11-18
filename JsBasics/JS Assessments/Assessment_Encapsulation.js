/* 

Assignments On Encapsulation
------------------------------
1. Student Record System  
Problem Statement:  
Create a Student class that uses encapsulation to protect its data. The 
class should have the following  
private fields:  
• name (String)  
• rollNumber (int)  
• grade (char)  
Provide appropriate getter and setter methods to access and modify 
the values. Also, create method  
that:  
• Creates a new student object  
• Sets the data using setters  
• Displays the data using getters  
and test it in separate class 




*/

class Students{

    #name;
    #rollNumber;
    #grade;
constructor(name,rollnum,grade){

    this.#name=name;
    this.#rollNumber=rollnum;
    this.#grade=grade;
}

//getter name
getName()
{
   return  this.#name;

}

//setternamef
setName(sname)
{
this.#name=sname;
}



//setter roll num
setRollnumber(rollnum)
{
this.#rollNumber=rollnum;

}

//getter roll num

getRollnumber()
{
return this.#rollNumber;
}

//setter grade
setGrade(grade)
{
this.#grade=grade;
}


//getter grade
getGrade()
{
return this.#grade;
}

}

let stud=new Students("Rajesh",1212313,'A');

console.log(stud);
console.log(`Student Name: ${stud.setName("Praveen")} \nStudent Roll num:${stud.setRollnumber(1234)}\n Student Grade${stud.setGrade('B')}`);
stud

console.log("Student Name :",stud.getName()+"\nStudent Rollnumber :"+stud.getRollnumber()+"\nStudent Grade :"+stud.getGrade());




/*
2. Online Shopping – Product Class 
Problem Statement 
Build a JavaScript class Product that stores the following product 
details: 
• productId – number 
• productName – string 
• price – number 
• quantityInStock – number 
Requirements 
1. All fields must be private using JavaScript private fields (#). 
2. Provide public getters and setters for all fields. 
3. Add validation to the setters: 
o price must be greater than 0. 
o quantityInStock must be 0 or greater. 
4. productName should not be empty. 
5. Create an object of the Product class. 
6. Use the public setters to set or modify product details. 
7. Use the public getters to retrieve and display product details. 
8. Try accessing a private field directly from outside the class and 
observe what happens. 


*/

console.log("-------------Product --------------")
class Product{

    #productId;
    #productName;
    #price;
    #quantityInStock;

//Constructor


constructor(productid,productname,price,stock){
this.#productId=productid;
this.#productName=productname;
this.#price=price;
this.#quantityInStock=stock;

}
    //productID getter and setter methods

    getProductId()
    {
        return console.log("Product ID",this.#productId);
    }
    setProductId(productid)
    {
        return console.log("Product Id :",this.#productId=productid);

    }

    //ProductName getter and setter methods

    getProductName()
    {
        if(this.#productName!=null)
        {
            return console.log("Product Name :",this.#productName);
        }
        else{
            return console.log("invalid ProductName");
        }
        //return this.#productName!=null;
        


    }

    setProductName(productname)
    {
        if(productname!=null){

        return console.log("Product Name :",this.#productName=productname );
        }
          else{
            return console.log("invalid ProductName");
        }
    }
    

    //Price getter and setter methods

    getPrice()
    {
        return console.log("MacBook Price",this.#price);
    }
    setPrice(price)
    {
    if(price>0)
      {
       return console.log(this.#price=price);
        }
        else{
            console.log("Check price")
        }

    }

    getquantityInStock()
    {
        return console.log("Mac-Book Stock :",this.#quantityInStock);
    }

    setquantityInStock(stock)
    {
        if(stock>=0){
            return console.log("Mac-Book Stock :",this.#quantityInStock=stock);
        }
        else{
            console.log("Check the Stocks")
        }
    }
}

/* let prod=new Product(101,"samsung",200000,10000);

console.log(prod);
console.log("Product Id :",prod.getProductId());
console.log("Product Name :",prod.getProductName());
console.log("Product Price :",prod.getPrice());
console.log("Product Stock :",prod.getquantityInStock());

let prod1=new Product(102,'',200000,10000);

console.log(prod1);
console.log("Product Id :",prod1.getProductId());
console.log("Product Name :",prod1.getProductName());
console.log("Product Price :",prod1.getPrice());
console.log("Product Stock :",prod1.getquantityInStock()); */

//object
let prod=new Product(101,"MacBook",2000000,100);
console.log("------getter Method calling---------------")
//get
prod.getProductId();
prod.getProductName();
prod.getPrice();
prod.getquantityInStock();

//set
console.log("------Setter Method calling---------------")

prod.setProductId(12345);
prod.setProductName("Iphone 17");
prod.setPrice(890000);
prod.setquantityInStock(15);

console.log("---------------Another way calling properties---------------");


console.log(prod);
console.log("Product Id :",prod.getProductId());
console.log("Product Name :",prod.getProductName());
console.log("Product Price :",prod.getPrice());
console.log("Product Stock :",prod.getquantityInStock());

let prod1=new Product(102,'',200000,10000);

/*

Problem 3: Bank Account 
Create a BankAccount class. 
Requirements: 
• Create a private variable #balance.  
• Create methods:  
o deposit(amount)  
o withdraw(amount)  
o getBalance()  
• The balance should not be directly accessible from outside the 
class.  
• Prevent withdrawal if the amount is greater than the available 
balance 
*/

console.log("--------BankAccount--------")
class BankAccount
{

#balance;
constructor(bal)
{
    this.#balance=bal;
}
deposit(amount){
return this.#balance-amount;
}

withdraw(amount)
{
    if(amount>this.#balance)
    {
        console.log("Insufficent Fund!.....")
    }

    return this.#balance-amount;

}

getBalance()
{
 return this.#balance;
}

}


let balan=new BankAccount(123);
console.log("Total Amount :",balan.getBalance());
console.log("Aftet deposite Amount :",balan.deposit(100));
console.log("After withdraw amount :",balan.withdraw(50));


/*

Problem 4: Student Marks 
Create a Student class. 
Requirements: 
• Private property: #marks  
• Method: setMarks(marks)  
• Method: getMarks()  
• Marks must be between 0 and 100.  
• Invalid marks should not be stored.*/


console.log("------Marks-----------")

class Studentmarks
{
    #marks;
    constructor(marks)
    {
        this.#marks=marks;
    }

    setMarks(marks)
    {
 if(marks>=0 && marks<=100)
        {
            return console.log("Valid Marks :",marks);
        }
        else{
            console.log(marks,"is Invalid Marks")
        }
    }
    getMarks()
    {
        if(this.#marks>=0 && this.#marks<=100)
        {
            return console.log("Marks :",this.#marks);
        }
        else{
            console.log(this.#marks,"is Invalid Marks")
        }
    }
}

let stdmarks=new Studentmarks(78);
stdmarks.getMarks();

stdmarks.setMarks(200);

let stdmarks1=new Studentmarks(101);

stdmarks1.getMarks();

stdmarks1.setMarks(0);



