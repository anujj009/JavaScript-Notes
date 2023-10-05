const name = "anuj "
const age = 27

console.log(`hello my name is ${name} and age is ${age}`);

const game = new String('pub-g')

console.log(game[0]);

console.log(game.length);

console.log(game.charAt(2));

console.log(game.indexOf('u'));

const newS = game.substring(0,2);
console.log(newS);

const anStr = game.slice(-3,2)
console.log(anStr);

const url ="https://anuj.com/home%20page"

console.log(url.replace('%20', '-'));

console.log(game.split('-'));


