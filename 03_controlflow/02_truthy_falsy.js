// const userEmail = "abc@gmail.com"
const userEmail = []

// if (userEmail) {
//     console.log("has email");
// }else{
//     console.log("no email");
// }

/* // falsy values
false
0, -0
BigInt 0n
""
null
undefined
NaN
*/

/* //truthy values
"0"
'false'
" "
[]
{}
function(){}        //empty function

*/

if (userEmail.length === 0) {
    // console.log("empty array");
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0) {
    // console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 5 ?? 6


console.log(val1);  //5
console.log(val2);  //10
console.log(val3);  //15
console.log(val4);  //5

// Ternary Operator

// condition ? true : false

const price = 100
price >=50 ? console.log("cheap") : console.log("expensive");




