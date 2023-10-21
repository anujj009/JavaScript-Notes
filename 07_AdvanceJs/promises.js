const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("async task complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//////////////////////////////////////////////

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

///////////////////////////

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({name : "anuj", email: "abc@gmail.com"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

/////////////////////////////////////////////////////////

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
         resolve({name: "anuj", password: "123"})   
        }else{
            reject('ERROR: some error')
        }
    },1000)
})

promiseFour.then( (user)=>{
    console.log(user);
    return user.name
}).then((uname)=>{
    console.log((uname));
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("promise is either resolved or rejected"))

//////////////////////////////////////////

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true
        if (!error) {
         resolve({name: "anuj", password: "123"})   
        }else{
            reject('ERROR: Five error')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

////////////////////////////////////////////////////
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E", error);
    }
}

// getAllUser()

///////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error) => console.log(error))

 

