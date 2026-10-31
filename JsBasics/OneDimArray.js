let id =[10,20,30,40,50];
console.log(id);//[ 10, 20, 30, 40, 50 ]

let Empe = [
    
    
    ["EmployeeId" ,"EmpName","EmpPhone","Salary"], //row
    
    [101,"Anusha",9398888384,350000],//row
    
    [102,"Mahitha",9778636636,70000],
    
    [103,"Lavaya",9737355352,77283],
    
    [104,"Smith",2346626383,88752]


]

console.log(Empe);

console.log("Num of rows "+Empe.length);// Empee.length is to check Row lenght
console.log("Num of columns "+Empe[0].length); //Empe
console.log(Empe[4]);

console.log(Empe);

console.log("Total num of rows in the Array  "+Empe.length )

console.log(Empe[0]); //  total num of rows
console.log(Empe[1]);
console.log(Empe[2]);
console.log(Empe[3]);
console.log(Empe[4]);

console.log(Empe.length);


console.log(Empe[2][3])

console.log(Empe[3][1])

console.log("---->"+Empe[0][0])
console.log("---->"+Empe[0][1])
console.log("---->"+Empe[0][2])
console.log("---->"+Empe[1][1])



for( let row=0;row<Empe.length;row++)
{
    let data='';

    for(let col=0;col<Empe[row].length;col++)
    {
        data=data+Empe[row][col]+" "; 
         
        /* 
        row 0,1,2,3,4,5
        col 0,1,2,3,4
        In 1 phase Empe[0( row positin )][0(column position)],[0][1],[0][2],[0][3][0,4] likewise until 4 time it will repeat  data= " "+EmpleyeeID EmpName Empphone Salary 

        In 2 phase Empe [1][0] like wise (1,1) (1,2)(1,3)(1,4)
            101 Anusha 9398888384 350000 

        In 3 phase Empe [2][0] like wise (2,1) (2,2)(2,3)(2,4)
            102 Mahitha 9778636636 70000 

        In 4 phase Empe [3][0] like wise (3,1) (3,2)(3,3)(3,4)
            103 Lavaya 9737355352 77283 

        In 5 phase Empe [4][0] like wise (4,1) (4,2)(4,3)(4,4)
            104 Smith 2346626383 88752 
 

        */
    }

    console.log(data);
    
// EmployeeId EmpName EmpPhone Salary 
// 101 Anusha 9398888384 350000 
// 102 Mahitha 9778636636 70000 
// 103 Lavaya 9737355352 77283 
// 104 Smith 2346626383 88752 

}





