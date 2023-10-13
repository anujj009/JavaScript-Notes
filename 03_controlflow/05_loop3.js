// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const obj = {
    name :"a",
    age : 22
}

// for (const [key,value] of obj) {
//      console.log(key, ':-', value);     //objects is not iterable
// }
