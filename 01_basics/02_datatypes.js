"use strict";       //treat all JS code as newer version

// alert("hello")    //we are using node js, so no use of it

let name ="anuj"
let age = 25
let isLoggedIn = true

//primitive DT: 7
// Number
// BigInt
// String =""
// Boolean
// null = standalone value/empty value
// undefined 
// symbol  = for uniqueness, 

//reference(non-primitive) DT
//object
//Arrays
//functions





console.log(typeof 123);
console.log(typeof null);    //object
console.log(typeof undefined);      //undefined


const id = Symbol('123')
const oid = Symbol('123')
console.log(id===oid);      //false


/*****************memory***********/

//stack=primitive  => copy provided
//heap = non-primitive  => reference provided

