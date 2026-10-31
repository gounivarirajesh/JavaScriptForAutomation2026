/* 
splice()
--------
Removes elements from an array and if necessary
inserts new elements in their place,returning the elements

to delete any element and insert any element in array we use splice()

Syntax
-------
array.splice(startIndex, deleteCount?, insertelements?)

*/ 

let fruits = ["Mango",'Orange','Banana','Grapes','Kiwi','Apple']
//+ve           0       1          2        3       4       5


console.log(fruits);//[ 'Mango', 'Orange', 'Banana', 'Grapes', 'Kiwi', 'Apple' ]

let splice1=fruits.splice(2,1);//[ 'Banana' ]
console.log(splice1);//[ 'Banana' ]

console.log(fruits)//[ 'Mango', 'Orange', 'Grapes', 'Kiwi', 'Apple' ]

let splice2=fruits.splice(3,2);
console.log(splice2);//[ 'Kiwi', 'Apple' ]

console.log(fruits);//[ 'Mango', 'Orange', 'Grapes' ]


let splice3=fruits.splice(1,1,'jackfruit','CanBerry');
console.log(splice3);//√[ 'Orange' ]

console.log(fruits);//[ 'Mango', 'jackfruit', 'CanBerry', 'Grapes' ]


let splice4=fruits.splice(2,0,'Orange','RaseBerry');
console.log(splice4);//[]  spice is not deleting any value just here inserting two values  index 2


console.log(fruits); //[ 'Mango', 'jackfruit', 'Orange', 'RaseBerry', 'CanBerry', 'Grapes' ]

//Insert papaya at position 4 add delete count is 0

let splice5=fruits.splice(4,0,'papaya');

console.log(splice5);//[]
console.log(fruits);//['Mango','jackfruit','Orange','RaseBerry','papaya','CanBerry','Grapes']

//if you don't pass delete count it will delete all the elements from the start index
//delete from the 3rd position 
let splice6= fruits.splice(3)

console.log(splice6);//[ 'RaseBerry', 'papaya', 'CanBerry', 'Grapes' ]
console.log(fruits);// [ 'Mango', 'jackfruit', 'Orange' ]








