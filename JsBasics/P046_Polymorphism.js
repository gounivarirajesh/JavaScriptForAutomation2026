/*
Polymorphism 
--------------
One thing in many form's
what is purpose?
Method reusability

type of polymorphism 
--------------------
1.compile time polymorphism (method overloading)
2.run time polymorphism (method overriding)


1.compile time

Method can be overloaded only when having same method name decleared in same class with different signature.

different signature
-------------------
1.number of parameters
2.type of parameters
3.change order of parameters


note: As JS is interpreter based language wna here we dont have complier involve at compilation so js does not support compile tiime polymorphism/method overloading 
-->Method overloading and constructor overloading is not support in Js


*/


class LoginTest{

    doLogin()
    {
        console.log("login with default credentials")
    }
    doLogin(username,password)
    {
        console.log(`Login with ${username} and ${password} ` );

    }

    doLogin(otp)
    {
        console.log("login with otp")
    }
}


let log= new LoginTest();

log.doLogin();
log.doLogin("rajesh","rajesh#123");

/* 
output : 
login with otp
login with otp
*/



/* 
Run time Polymorphism 
----------------------
-> To achieve runtime polymorphism first classes must be IS-A relation(Inheritance)

-> method overriding is only possible when parent and child class must have same name method with same signature
-> So already implemented method we can modify/update using child class with overriding.

note: Always child class override parent class method 

*/

class Parent {
    color()
    {
        console.log("blue");
    }


}

class Child extends Parent{
    color(){
        console.log("white");
    }
}

const c=new Parent();
c.color();

const w=new Child();
w.color();
