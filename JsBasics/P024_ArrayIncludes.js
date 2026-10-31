
/* 
includes()

It determines whether an array includes a certain element,
returning true or false as appropriate



(method) Array<number>.includes(searchElement: number, fromIndex?: number | undefined): boolean
Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.

f
*/
let id=[10,20,30,40,50,60,70,80,90,100]

console.log(id.length)//10
console.log(id);//[10, 20, 30, 40,  50,60, 70, 80, 90, 100]

console.log("Search for 50 in Array --> "+id.includes(50));//Search for 50 element in the Array --> true

console.log("Search for 120 in Array (true/false) --> "+id.includes(120));//Search 120 Element present in Array (true/false) --> false

console.log("Searching for 180 from index 9th poistion  "+id.includes(180,9))//false


console.log("Searching for 60 from index 5th poistion  "+id.includes(60,5)) //true

