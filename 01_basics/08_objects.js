//singleton object => by using constructors, not with literals
// Object.create       //constructor method

//object literals

const sym = Symbol("key1")

const user = {
    name : "anuj",
    "email id":"anuj@gmail.com",
    [sym] : "mykey1",

    age : 20,
    location: "bengaluru"
}

// console.log(user.age);
// console.log(user.email id);      //not possible
// console.log(user["email id"]);
// console.log(user["name"]);
// console.log(user[sym]);


// Object.freeze(user)

user.age = 25
// console.log(user);

// user.greetings = function(){
//     console.log("hello user");
// }

// user.greetingsTwo = function(){
//     console.log(`hello user, ${this.name}`);
// }

// // console.log(user.greetings);    

// console.log(user.greetings());    
// console.log(user.greetingsTwo());    

/********************************* */


// const tinderUser = new Object()       //singleton object

const tinderUser = {            //non-singleton object

}       

tinderUser.id ="123ab"
tinderUser.name="john"

// console.log(tinderUser);

const regularUser ={
    email: "abc@gmail.com",
    fullName : {
        userfullname: {
            firstName : "anuj",
            lastName : "sahu"
        }
    }
}

// console.log(regularUser.fullName.userfullname);
// console.log(regularUser.fullName?.userfullname);     // ? - if full name is not there so for safety purpose 

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2) 
// assign used for modify arrays({}=target, source1, source2)

const obj3 ={...obj1,...obj2}       //spread operator-used
console.log(obj3);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// Spread syntax can be used when all elements from an object or array need to be included in a new array or object,
// or should be applied one-by-one in a function call's arguments list.

const users = [
    {
        id : 1,
        email: "abc@mail.com"
    },
    {
        id : 2,
        email: "abc@mail.com"
    },
    {
        id : 3,
        email: "abc@mail.com"
    }
]

users[1].email

console.log(tinderUser);        //{ id: '123ab', name: 'john' }

console.log(Object.keys(tinderUser));   //[ 'id', 'name' ]
console.log(Object.values(tinderUser)); // [ '123ab', 'john' ]
console.log(Object.entries(tinderUser));    //[ [ 'id', '123ab' ], [ 'name', 'john' ] ]

console.log(tinderUser.hasOwnProperty('id'));       //true
