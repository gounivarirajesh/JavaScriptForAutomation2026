import {StudentInfo,pi as value} from "./P040_ModuleExport.js";

import{testdata} from "./P032_ObjectCopy.js";
console.log("-----------Import Module--------------- ")
let s2=new StudentInfo(111,"Rohith sharma");
console.log(s2);
s2.getinfo();
s2.test();

//console.log("Pi value is :",pi)

console.log("By using Alias way PI is :",value);
console.log(typeof StudentInfo);

console.log(testdata);
console.log(typeof testdata);



