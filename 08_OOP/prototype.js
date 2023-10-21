//  let name = "anuj    "

//  console.log(name.trueLength);

let heros = ["thor", "spd"]

let heroPower ={
    thor: "hammer",
    spd: "sling",

    getSpdPower: function(){
        console.log(`spidey power is ${this.spd}`);
    }
}

Object.prototype.anuj = function () {
    console.log("anuj in all objects");
}

heroPower.anuj()
heros.anuj()


// inheritane

let user = {
    name: "abc"
}

let teacher = {
    makeVideo: true
}
let support = {
    isAvailable : false
}
let TAsupport = {
    assign : "js assign",
    __proto__: support
}


teacher.__proto__ = user

//modern sytax

Object.setPrototypeOf(support,teacher)


