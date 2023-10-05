const accountId = 12345
let accEmail = "anuj@gmail.com"         //mostly used
var accPass = "123"         //scope problem, dont use
accCity ="benga"            //avoid it
let accState;
// accountId=2   //not possible
accEmail="a@yahoo.com"
accPass="abc"

console.log(accountId);

console.table([accountId,accEmail,accPass,accCity, accState])