// after ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email= email
        this.password =password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeName(){
        return  `${this.username.toUpperCase()}`
    }
}

const user1 = new User("anuj", "a@mail.com","123")

console.log(user1.encryptPassword());
console.log(user1.changeName());



