function multiBy5(num){
    return num*5
}

multiBy5.power = 2

console.log(multiBy5(5));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function createUser(name, score) {
    this.name = name
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.print = function(){
    console.log(`score is ${this.score}`);
}

const abc = new createUser("chai", 25)
const xyz = createUser("tea", 250)

abc.print()


/* 
new keyword :-
- new object is created
- a prototype is linked
- constructor is called
- new object is returned
*/

