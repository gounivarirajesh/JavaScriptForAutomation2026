/* //String is collection of string
In JS String is used as primitive datatype and string is immutable Object
String are immutable means once you declare value/string, you can't modified it  

if you modify string Js Enginee will create new Object 

In JSEnginee we have constant memory area where string Object will create

Anything we write with  Let " ",' ',` `

*/

let firstname="Rajesh";
console.log(firstname);

for(let i=0;i<firstname.length;i++)
[
    console.log(firstname[i])
]

let s1="Hello";
let s2="Hello"
console.log(s1===s2)

s1="Hello Everyone"
console.log(s1+s1);
console.log(typeof s1);
console.log(s1===s2)


//In strings we have lenght Property to check the lenght of an string

let bankName="State Bank of India"

console.log(bankName.length);


//How to create by using string using new key word String Constructor
let accountType1 = new String("Saving Account");

console.log(accountType1);//[String: 'Saving Account']

console.log(typeof accountType1);//object

let accountType2 = new String("Saving Account")

console.log(accountType2);//[String: 'Saving Account']

console.log(accountType1===accountType2);//false  //Because of Heap memory it will allow to duplicate Object, i
// it will create a new object if you assign same data 

//with respect to object === operator check reference


/* 

String Methods

toUpperCase()
-------------- 

*/


let movieName="Sprite"

console.log(movieName.toUpperCase());

console.log(movieName.toLowerCase());


let app1="Facebook";
let app2="Instagram";

let app3="Facebook";
console.log(app1 === app2); //false

console.log(app1===app3); //true

//include() : seaching for substring or partial match 

let courseDetails="Playwright is Webui automation testing framework!";

console.log("Search Webui Element: ",courseDetails.includes("Webui"));
console.log("Search PlayWright Element: ",courseDetails.includes("Playwright"));

//StartsWith()
console.log("----------startsWith-------------------------")

console.log("Search PlayWright Element: "+courseDetails.startsWith("P"));
console.log("Search Mocha Element: "+courseDetails.startsWith("Mocha"));
console.log("Search testing Element: "+courseDetails.startsWith("test"));


/* Returns true if the sequence of elements of searchString converted 
to a String is the same as the corresponding elements of this object (converted to a String) 
starting at endPosition – length(this). Otherwise returns false. */
console.log("-------------endsWith ------------------------")
console.log(courseDetails.endsWith('!'));
console.log(courseDetails.endsWith("frame"));
console.log(courseDetails.endsWith('right'));
console.log(courseDetails.endsWith("work!"))

//trime() --> to ignore white space after and before string 

let whiteSpace="   welcome to JavaScript           ";

console.log(whiteSpace);//   welcome to JavaScript           
console.log(whiteSpace.length);
console.log(whiteSpace.trim());//welcome to JavaScript
console.log(whiteSpace.trim().length);

//CharAt() -->it will return character at a specific index 

let traniner="PlayWright Trainer";


console.log(traniner.length);
console.log(traniner.charAt(4));
console.log(traniner.charAt(15));

console.log(traniner.charAt("20"));


//indexof("character") :  
 let trainerType="TypeScript Trainer";

 let first =trainerType.indexOf("T");

 console.log(first);

console.log(trainerType.indexOf("T",first+1))

let pOccu= trainerType.indexOf('p');
console.log(pOccu);


let psecOccur=trainerType.indexOf('p',pOccu+1);
console.log(psecOccur);





let searchEle="i";
let arr=[];
let count =0;
for(let i=0;i<trainerType.length;i++)
{
    if(trainerType.charAt(i)===searchEle)
    {

        arr.push(i);
        count++;

    }
}

console.log("Position of an search charater"+arr);

console.log("Duplicate characters in string "+count);


//concat : 

let s11="Hello";
let s12="Welcome to JS";

let concat1 =s11.concat(" ",s12);
console.log(concat1);


// substring()
let  automation ="Playwright is end to end automation testing framework for Ui and API testing"

console.log(automation.length);

let subbstring=automation.substring(30);

console.log(subbstring);


let subbstring1=automation.substring(43);
console.log(subbstring1)

let subbstring2=automation.substring(0,24);
console.log(subbstring2);

//replace()/replaceall() and split()
let automationTesting ="Playwright is end to end automation testing framework for Ui and API testing";


console.log(automationTesting.replace("testing","#####"))

console.log(automationTesting.replaceAll("testing","*******"))

console.log(automationTesting.replaceAll("end",'E'));

//split()

let tools="selenium,Appium,postman,cypress,playwright";

console.log(tools);

let splittools=tools.split(',');

console.log(splittools);


let date="Nov 2026"

let mon=date.split("")[0];
let year=date.split('')[1];


console.log(mon +" "+year);


//how to reverse any string?


//how to reverse any string ?

let reverseString="Hello"; 
//.                01234   

console.log(reverseString);

let res='';  
for(let i=reverseString.length;i>=0;i--) 
    
    // i =4 ; 4>=0 
    // i=3  ; 3>=0
    // i=2  ; 2>=0
    // i=0  ;1>=0
    // i=0  ;0>0    
    {
    res=res+reverseString.charAt(i);
 
    //res=""+o ->res=o
    //res=o+l
    //res=ol+l
    //res=oll+e
    //res=olle+H
    //res=olleH


}
console.log(res);

console.log();

//count words from string

let allTools = "Selenium,TypeScript,JavaScript,Appium,Playwright";

console.log(allTools);
console.log(allTools.split(",").length);


//decleare name and convert even position data into uppercase and odd position into Lowercase


let Fname ='rajesh';

let result1=" ";

for(let i=0;i<Fname.length;i++){

    if(i%2===0)
    {
        result1=result1+Fname.charAt(i).toUpperCase();
        //console.log(Fname.charAt(i).toUpperCase());

    }
    else{
        result1=result1+Fname.charAt(i).toLowerCase();
    }
}

console.log(result1);



// you have like in array "1creata,2benz,3Tata"
// o/p -->. creata ,benz ,tata


let carData="1creata,2benz,3Tata";
let carRes= carData.replace(/[0-9]/g," ")
console.log(carRes);

let numericvalues="1creata,2benz,3Tata";
let numvalues= carData.replace(/[a-zA-Z]/g,"")
console.log(numvalues);

 

