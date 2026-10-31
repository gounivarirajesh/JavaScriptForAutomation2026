//How to Immute the Object ? 
// with the help of freeze() method we can do Object interface Immutable 

let castCrew={
  moviename: 'Fauzi',
  releaseDate: '19-Mar-2027',
  Actor: 'Prabhas',
  Actress: 'Imanvi',
  tickets: 1234,
  totalNumberofworkers: 20000,
  movieBudget: '250CR',
  producer: 'Bhushan Kumar',
  productionCompany: 'T-Series and MMM'
}

//read
console.log(castCrew);

Object.freeze(castCrew); //Object will become freeze

/*

//insert 
console.log(castCrew.villen="katapa");//TypeError: Cannot add property villen, object is not extensible

//modify 

console.log(castCrew.Actor="Rajesh");//TypeError: Cannot assign to read only property 'Actor' of object '#<Object>'

delete castCrew.moviename //Cannot delete property 'moviename' of #<Object>

*/



let moviecastCrew={
  moviename: 'Fauzi',
  releaseDate: '19-Mar-2027',
  Actor: 'Prabhas',
  Actress: 'Imanvi',
  tickets: 1234,
  totalNumberofworkers: 20000,
  movieBudget: '250CR',
  producer: 'Bhushan Kumar',
  productionCompany: 'T-Series and MMM'
}

//read
console.log(moviecastCrew);

Object.seal(moviecastCrew);

//insert
//console.log(moviecastCrew.totaltheaters=3500)//TypeError: Cannot add property totaltheaters, object is not extensible

//modify
console.log(moviecastCrew.moviename="Sprit");
console.log(moviecastCrew.tickets=9876);

//delete

//delete moviecastCrew.productionCompany // TypeError: Cannot delete property 'productionCompany' of #<Object>

console.log(moviecastCrew);







