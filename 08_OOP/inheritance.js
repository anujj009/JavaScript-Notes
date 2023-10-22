class User {
    constructor(name){
        this.name = name
    }

    logMe(){
        console.log(`user is ${this.name}`);
    }
    static createId(){
        return `123`
    }
}

class Teacher extends User {
    constructor(name, email, password){
        super(name)
        this.email =email
        this.password = password
    }

    addCourse(){
        console.log(` new course added by ${this.name}`);
    }
}

const user1 = new Teacher("xyz", "x@MediaList.com", "123")
user1.addCourse()

const us = new User("abc")
us.logMe()

console.log(us instanceof User);

// console.log(us.createId())
