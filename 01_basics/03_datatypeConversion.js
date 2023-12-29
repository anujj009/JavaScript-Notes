let score = "35ac"

console.log(typeof score);  //string

let valueNum = Number(score)

console.log(typeof valueNum);   ///number
console.log(valueNum);      //NaN


//"33" => 33
//"33ab" => NaN
//true <=> 1 //false <=> 0
// "" => false
//"anuj" => true


let Num = 55
let stringNum = String(Num)
console.log(stringNum)   //55 => string



//*****************operations*********** */

console.log("1"+2);     //12
console.log(1+2+"2");   //32
console.log("1"+2+2);   //122
 
console.log(+"");       //0

console.log(2**3);  //8
console.log("2">1);     //true

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true (0>=0)

console.log(undefined > 0); // false in every operator

// === strict check - DT and value both check

