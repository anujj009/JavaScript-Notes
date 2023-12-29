const arr = [0,2,5,8,true,"anuj"]

//resizable array

const arr1 = new Array(0,5,8,10,3)
// console.log(arr1[1]);

//array methods

// arr1.push(10)
// console.log(arr1);

// console.log(arr1.pop());     // remove last value
// arr1.unshift(9)     //add element in first position
// arr1.shift()        //remove 1st element

// console.log(arr1.includes(5));  //true
// console.log(arr1.indexOf(15));  //-1

const newArr = arr1.join()      //string format
console.log(newArr);    // 0,5,0,8


//slice, splice

//slice: The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
//splice: The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// console.log("A", arr1);      // A [0,5,8,10,3]
// const a11 = arr1.slice(0,2)      //  return new array
// console.log(a11);  //[0,5]
// console.log("B", arr1);     // B [ 0, 5, 8, 10, 3 ]


// const a22 = arr1.splice(0,2)     //manipulate original array
// console.log(a22);         // [0,5]
// console.log("C", arr1);     // C [ 8, 10, 3 ]

/**********************array 2****************** */

const a1 = ["a", "b", "c"]
const a2 = ["d", "e", "f"]

// a1.push(a2)
// console.log(a1);           // [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
// console.log(a1[3][1]);      //e

//  const a3 = a1.concat(a2)       //returns new array
// console.log(a3);        // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// const b = [...a1,...a2]     //spread operator, similar to concat
// console.log(b);

const c = [1,2,3,[8,9],10,12,[6,7,[20]],50]
const  c1 = c.flat(Infinity)        //convert in single array
console.log(c1);


console.log(Array.isArray("anuj"));     // false
console.log(Array.from("anuj s"));  // [ 'a', 'n', 'u', 'j', ' ', 's' ]
console.log(Array.from({name:"anuj"}));  //[]

let x = 5
let y = 10
let z = 15
console.log(Array.of(x,y,z));       //[5,10,15]

