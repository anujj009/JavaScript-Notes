const accountId = 12345
let accEmail = "anuj@gmail.com"         //mostly used
var accPass = "123"         //scope problem and functional scope problem, dont use
accCity ="benga"            //avoid it
let accState;               //undefined
// accountId=2   //not possible
accEmail="a@yahoo.com"
accPass="abc"

// let accEmail ="a@gmail.com"   // not possible
// var accPass = "xyz546"      //possible
console.log(accountId);


console.table([accountId,accEmail,accPass,accCity, accState])

// node fileName;

// if we use var with same variable name many times in same program and if we change the variable value then all variables
// values will change. thats why we dont use var.

// the variables which are not initialized then its value is undefined.