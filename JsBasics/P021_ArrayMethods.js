let color =["red","blue","black","pink"]
console.log(color);//[ 'red', 'blue', 'black', 'pink' ]

console.log(color.length) //4
 

/*Push() 
push method is used to add a new elements into the end of an array 
push always return type is number 

//push(...items: string[]): number
// Appends new elements to the end of an array, and returns the new length of the array.

push always return number 
*/

let TotalColor=color.push("Orange")

console.log(TotalColor);

console.log(color);

console.log(color.push("Yellow","white"));

console.log(color);//['red','blue','black',  'pink','Orange', 'Yellow','white']


// Shift()
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
//Shift Returns always - string | undefined

let removefirst = color.shift();
console.log(removefirst); //red
console.log(color)// [ 'blue', 'black', 'pink', 'Orange', 'Yellow', 'white' ]

let removenexttime = color.shift();
console.log(removenexttime);
console.log(color);

let emptyarr =[]
console.log(emptyarr.shift()) //undefined
console.log(emptyarr); // []


//Pop() -Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// POP - Return type is string | undefined

let characters =['A','B','C','D','E']

let removEle1 =characters.pop();
console.log(removEle1); //string | undefined

console.log(characters);


let numeric=[1,2,3,4,5,6]
let removeE1 = numeric.pop();
console.log(removeE1); // 6    //return type of pop is number | undefined
console.log(numeric);//[ 1, 2, 3, 4, 5 ]


// unshift() - Inserts new elements at the start of an array, and returns the new length of the array
let unshiftmethod =characters.unshift("Alphabets")

console.log(unshiftmethod);//5 

console.log(characters); //[ 'Alphabets', 'A', 'B', 'C', 'D' ] 


// Join() - Adds all the elements of an array into a string, separated by the specified separator string. 


let words= ["I","am","Rajesh","Gounivari",]

console.log(words);

let sentences= words.join(" ")
console.log(sentences)





// reverse()
//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

let rev=[9,8,7,6,5,4,3,2,1,0]

console.log(rev);

let usingrev= rev.reverse();

console.log(usingrev);

console.log(rev);

let alpha=['A','B','C','D'];
let reversealpha=alpha.reverse();

console.log(reversealpha);


//concat()
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.



let arr1=[101,102,103,104]
let arr2=["Ramu","Ravi","Pk","Naveen"]
let arr3=["abc","xyz","pqr"]

let concatarry=arr1.concat(arr2,arr3);
console.log(concatarry);
console.log(concatarry.length);



//Spread operator to copy an array


let first=[1,2,3,4]

console.log(first);

let second=["a","b","c","d",...first]


console.log(second);

let third=[101,102,103,104,105,...first]

console.log(third);













