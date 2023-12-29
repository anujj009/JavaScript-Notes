const score = 50
// console.log(score);      //50

// const balance = new Number(100)      //[Number : 50]

// console.log(balance);

// console.log(balance.toString());         //50  {string}

// console.log(balance.toFixed(2));        //100.00

const num = 123.68
console.log(num.toPrecision(3));        //124  
console.log(num.toPrecision(4));        //123.7

/************Maths************ */

console.log(Math);

// console.log(Math.abs(-5));
// console.log(Math.min(4,1,8));

console.log(Math.random());    //0-1
console.log((Math.random()*10 )+1); //1-9.68433
console.log(Math.floor(Math.random()*10 )+1); //1-9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
