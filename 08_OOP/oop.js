// Object literal
const user = {
    name: "amuj",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got details");
        // console.log(`name: ${this.name}`);
        // console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);  //{}


function User(name, loginCount,isLoggesIn) {
    this.name = name;
    this.loginCount = loginCount;
    this.isLoggesIn = isLoggesIn;

    this.greetings = function(){S
        console.log(`welcome ${this.name}`);
    }

     return this;  //by default
}

let userOne = new User("anuj", 4, true)
let userTwo = new User("abc", 5, false)
// console.log(userOne);
console.log(userTwo.constructor);

