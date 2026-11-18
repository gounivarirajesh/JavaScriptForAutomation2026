// Inheritence 
/* 
Inheritance : Accessing properties from once class into other class we use inheritance 
--> Inheritance is IS-A relationship
what is purpose ?
1.to avoid code duplication 
2.to reuse methods
3.to achieve runtime polymorphism (method overriding)

real time example 

1.Parent and child relation 

How to implement?
we use extends keyword to implement Inheritance


note : Child class extends parent class
-> Every parent class access only parent properties
-> Every child class access properties from parent + child


Types of Inheritance
--------------------
1.single level
2.multi level
3.Hierarichal 

note:Directly not possiable from Js, , In TS its possiable by using interface()

4.Multiple Inheritance 
5.Hybrid inheritance 

*/

// Single level 
class A 
{
    m1()
    {
console.log("I m m1 belongs to A class");
    }

}

class B extends A{

    m2()
    {
console.log("I m m2 belongs to B class");
    }
}

let single=new B();
single.m1();
single.m2()



// Multi level


// Single level 
class One 
{
    one()
    {
console.log("I m one");
    }

}

class Two extends One{

    two()
    {
console.log("I m two");
    }
}

class Three extends Two{

    three(){
console.log("I m three")
    }
}
let multi=new Three();
multi.three();
multi.two();
multi.one();




class Animal
{
petname;
age;
constructor(pet,name)
{
    this.petname=pet;
    this.petname=name;

}
bark(petname,age)
{
console.log(this.petname=petname+" is Barking ")
console.log("Animal age",this.age=age+' Years');

}

}


// let animal1=new Animal();
// animal1.bark("Rotviller",3);


class Dog extends Animal{


eat(solidstate)
{
console.log("Dog is eating",solidstate);
}

sleep(){

console.log("Sleeping........")
}
}


let an=new Animal();
an.bark("Pomrein",2);


let dogg=new Dog();

console.log(dogg.eat("Milk"));


dogg.bark("Puppy",1);
