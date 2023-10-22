class User {

    constructor(email, password){
        this.email = email
        this.password =  password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const u1 = new User("a@mail.com", "xyz")
console.log(u1.password);


/******************** old ***************************/

function User1(email,password) {
    this._email =email
    this._password =password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
}

const u2 = new User1("x@.com", "abc")
console.log(u2.email);


/************* */


