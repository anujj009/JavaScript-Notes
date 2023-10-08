const arr = [0,2,5,8,true,"anuj"]

//resizable array

const arr1 = new Array(0,5,8,10,3)
// console.log(arr1[1]);

//array methods

// arr1.push(10)
// console.log(arr1);

// console.log(arr1.pop());
// arr1.unshift(9)     //add element in first position
// arr1.shift()        //remove 1st element

// console.log(arr1.includes(5));  //true
// console.log(arr1.indexOf(15));  //-1

// const newArr = arr1.join()      //string format
// console.log(newArr);

//slice, splice
// console.log("A", arr1);
// const a1 = arr1.slice(0,2)
// console.log(a1);
// console.log("B", arr1);


// const a2 = arr1.splice(0,2)     //manipulate original array
// console.log(a2);
// console.log("C", arr1);

/**********************array 2****************** */

const a1 = ["a", "b", "c"]
const a2 = ["d", "e", "f"]

// a1.push(a2)
// console.log(a1);
// console.log(a1[3][1]);      //e

//  const a3 = a1.concat(a2)       //returns new array
// console.log(a3);

// const b = [...a1,...a2]     //spread operator, similar to concat
// console.log(b);

// const c = [1,2,3,[8,9],10,12,[6,7,[20]],50]
// const  c1 = c.flat(Infinity)        //convert in single array
// console.log(c1);


console.log(Array.isArray("anuj"));
console.log(Array.from("anuj s"));
console.log(Array.from({name:"anuj"}));  //[]

let x = 5
let y =10
let z = 15
console.log(Array.of(x,y,z));

