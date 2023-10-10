// var c = 100

// if(true){
//     let a = 10
//     const b = 20
//     // var c =50
//     // d=60
// }

let a = 100

if(true){
    let a =10
    // console.log("inner a= "+a);
}


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

function one(){
    const username = "anuj"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

/************************************* */

console.log(addone(5));         //hoisting
function addone(num){
    return num+1
}


console.log(addtwo(10));
const addtwo = function(num){
    return num+2
}


