//how to copy Object to other Object?
// by using spread operator , object can be copy into another object


const student={
    sid:111,
    sname:"Raj",
    subject: "JavaScript"
}

console.log(student);

const classteacher={
    teachername:"Priyanka",
    ...student,

}

console.log(classteacher);

//modify
console.log(classteacher.sid="123");

//insert
console.log(classteacher.marks="89");

//delete
delete classteacher.subject;

console.log(classteacher);


let studentTeacherdetails ={

    ...classteacher,...student
}

console.log(studentTeacherdetails);



