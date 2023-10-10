//ES-06=> Arrow function

const user ={
    username : "anuj",
    price : 999,

    welcome: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcome()

// user.username ="sam"
// user.welcome()

// console.log(this);

function msg() {
    let m = "abc"
    console.log(this);
}

// msg()

const  message = function(){
    let m = "abc"
    console.log(this.m);
}

// message()

const  emp = () => {
    let m = "abc"
    console.log(this.m);
    console.log(this);
}

// emp()

//arrow functions

// const addtwo = (num1, num2) => {
//     return num1+ num2
// }

// const addtwo = (num1, num2) => num1+ num2

// const addtwo = (num1, num2) => (num1+ num2) 

const addtwo = (num1, num2) => ({user : "anuj"})   //return object

// if we use {} then return is mandatory
// if we use () then return not mandatory

// console.log(addtwo(3,8));


// IIFE => Imediately Invoked Function Expressions

( function tea(){
    console.log("DB conected");
}) ();

( () => {
    console.log(" connected");
} )();

