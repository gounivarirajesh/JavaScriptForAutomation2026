/* 
Super Keyword
=============

to access immediate parent class properties (variable/method,constructor) we use superkeyword

syntax :
super.method() -> to call parent class method
super() -> to call parent call constructor

Variable from parent class we can access only through method
*/

class Parent{
pid=123;

constructor()
{
    console.log("this is parent constructor is calling.....");
}

getparentIncome()
{
    console.log("parent income is $5555");
}
}

class Child extends Parent
{
    cid=321;
    constructor(){
        // to call parent constructor use super() method
        super();
        console.log("child class constructor calling .....");
    }
    getchildIncome()
    {
        console.log("child Income is $1200");
    }
    
}

// const p1=new Parent();
// p1.getparentIncome();


const c1 = new Child();
c1.getchildIncome();
