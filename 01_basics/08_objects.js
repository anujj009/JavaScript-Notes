//singleton => by using constructors, not with literals
// Object.create       //constructor method

//object literals

const sym = Symbol("key1")

const user = {
    name : "anuj",
    "email":"anuj@gmail.com",
    [sym] : "mykey1",

    age : 20,
    location: "bengaluru"
}

// console.log(user.age);
// console.log(user["email"]);
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


// const tinderUser = new Object       //singleton object

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
const obj3 ={...obj1,...obj2}       //spread operator-used
// console.log(obj3);

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

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
