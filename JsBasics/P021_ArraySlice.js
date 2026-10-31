/*

Slice()
--------
Travelling from left to right
at() : Returns the item Located at the specified index
index - the zero-based index of the desired code unit
A negative index will count back from the last item. 


*/
//  -ve  -6 -5 -4 -3 -2 -1 
let arr=[10,20,30,40,50,60]
 // +ve   0  1  2  3  4  5


console.log(arr.at(2))//30
console.log(arr.at(4))//50
console.log(arr.at(8))//undefined

console.log(arr.at(-2))//50
console.log(arr.at(-4))//30


console.log(arr.at(-12)) //undefined



// Slice()


/*

slice(start?: number, end?: number): number[]
Portion of slice will start from startindex upto endindex-1

The beginning index of the specified portion of the array. 
If start is undefined, then the slice begins at index 0.


Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.


The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.


*/
// -ve        -9 -8 -7 -6 -5 -4 -3 -2 -1 
let elements =[10,20,30,40,50,60,70,80,90]
//+ve           0  1  2  3  4  5  6  7  8
//             left                    right  

let slice1=elements.slice(2,6);
console.log(slice1);//[ 30, 40, 50, 60 ]

let slice2=elements.slice(3,8)
console.log(slice2);//[ 40, 50, 60, 70, 80 ]

console.log(elements); /* [10, 20, 30, 40, 50,60, 70, 80, 90]*/


let slice3 =elements.slice(4);
console.log(slice3);//[ 50, 60, 70, 80, 90 ]


let sl4=elements.slice(-3);
console.log(sl4); //[ 70, 80, 90 ]



// right to left traversing is not possible in the slice method
let sl5 = elements.slice(-2,-7)
console.log(sl5)//[]

let sl6 = elements.slice(-7,-3)
console.log(sl6);//[ 30, 40, 50, 60 ]

let sl7 = elements.slice(-3,-3)
console.log(sl7);//[]


let sl8 = elements.slice(-9,5)
console.log(sl8)//[ 10, 20, 30, 40, 50 ]



