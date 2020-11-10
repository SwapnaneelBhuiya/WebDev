var val;
let datatype1=typeof val;
var val=0;
let datatype2=typeof val;
var val=10n;
let datatype3=typeof val;
var val ="foo";
let datatype4=typeof val;
let datatype5=typeof Math;
let datatype6=typeof Symbol("id");
var val=true;
let datatype7=typeof val;
var sayHi=function(){
    console.log.apply("Say Hi");
}
let datatype8=typeof sayHi;
console.log(datatype8);