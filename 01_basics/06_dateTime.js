//dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let create = new Date(2023,0,16)
let create = new Date("01-14-2023")
console.log(create.toString());
console.log(create.getTime());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));  // in sec, for comaparison purpose

myDate.toLocaleString('default', {
    weekday: "long",
    
})
