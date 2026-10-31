/* 
indexof()
=========

Returns the index of the first occurence of an value in an array, or -1 if it is not present 
indexOf(searchElement: string, fromIndex?: number): number
*/


let month=['Jan','Feb','Mar','Aprl','May','Mar','Aprl','Jun','Mar','Jul']
//index.     0      1   2     3       4     5      6      7     8     9  

console.log(month);

let index1=month.indexOf('Mar')

console.log('First Occurence of Mar is '+index1);

let index2=month.indexOf('Mar',index1+1);
console.log('Second Occurence of Mar is '+ index2);


let index3 = month.indexOf('Mar',index2+1);
console.log("Third Occurence of Mar is "+index3);


let OcApl1=month.indexOf('Aprl');
console.log('1st occurence of April is '+OcApl1);


let OccApl2 = month.indexOf('Aprl',OcApl1);
console.log('2nd Occurence of April is '+OcApl1);


// in Array the is no value present what will be the output, // if it not present will get -1 as a result 

let decc=month.indexOf('Dec');
console.log(decc);


// to find the last occurence of an a search element

// (method) Array<string>.lastIndexOf(searchElement: string, fromIndex?: number | undefined): number
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

let index4=month.lastIndexOf('Mar')

console.log("Last index of March is "+index4);


let index5=month.lastIndexOf('Aprl')
console.log('Last index of April is '+index5);


//Single login where we can find all indexes for 'Mar'


let searchElement='Aprl';
let resArray=[];
let count=0;

for (let i=0;i<month.length;i++)
{
if (month[i]=== searchElement)
{
    resArray.push(i);
    count++;

}
}
console.log(`All index for ${searchElement} are: `+resArray);
console.log(`Duplicate element for ${searchElement} count :` +count);







