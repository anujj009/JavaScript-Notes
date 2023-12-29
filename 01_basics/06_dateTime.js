//dates

let myDate = new Date()
console.log(myDate.toString());     // Wed Dec 27 2023 17:38:32 GMT+0530 (India Standard Time)
console.log(myDate.toJSON());       // 2023-12-27T12:08:32.359Z
console.log(myDate.toLocaleString());   // 27/12/2023, 5:38:32 pm
console.log(myDate.getMonth() + 1);
console.log(typeof myDate);     //object

// let create = new Date(2023,0,16)
// let create = new Date("01-14-2023")
let create = new Date(2023,0,14)
console.log(create.toString());     // Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(create.getTime());      // 1673634600000

let myTimeStamp = Date.now()
console.log(myTimeStamp);       // 1703679214707 msec

console.log(Math.floor(Date.now()/1000));  // in sec, for comaparison purpose

myDate.toLocaleString('default', {
    weekday: "long",
    
})
