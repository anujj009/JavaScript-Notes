const name = "anuj "
const age = 27

console.log(`hello my name is ${name} and age is ${age}`);    //  ``= string interpolation

const game = new String('pub-g')

console.log(game[0]); //p

console.log(game.length);   //5

console.log(game.charAt(2));    //b

console.log(game.indexOf('u')); //1

const newS = game.substring(1,4);   
console.log(newS);  //ub-


const url ="https://anuj.com/home%20page"

console.log(url.replace('%20', '-'));

console.log(game.split('-'));  // ['pub', 'g'] 
//split(seperator, limit)
console.log(game.split('-',1));     //['pub']

console.log(url.includes('anuj'));  //true

// slice() extracts the text from one string and returns a new string. 
// Changes to the text in one string do not affect the other string.
const anStr = game.slice(1,-2)  // returns new element
console.log(anStr); //ub


