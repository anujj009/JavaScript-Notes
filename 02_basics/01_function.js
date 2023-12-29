function myName(){
    console.log("a");
    console.log("n");
    console.log("u");
    console.log("j");
}

// myName()

// function add(num1, num2){           //parameters
//     console.log(num1+num2);
// }

function add(num1, num2){         
    // let result = num1+num2
    // return result
    return num1+num2
}

// add()
// add(2,8)           //10                 //arguments
// add(3,"4")          //34
// add(3,"a")          //3a
// add(3,null)         //3

const result = add(5,4)
// console.log("result: ", result);

function loginUserMessage(username = "ram"){  //default value "ram"
    if(!username){
        console.log("enter user name");
        return
    }
    return `${username} just log in`
}

// console.log(loginUserMessage("anuj"));
// console.log(loginUserMessage());


function calculateCartPrice (val1, val2,...num1){          //rest operator
    return num1
}

console.log(calculateCartPrice(100,200,300,500,600));

const product ={
    name: "mobile",
    price: 9999
}

function handleProduct(anyobject){
    console.log(`product name is ${anyobject.name} and its price is ${anyobject.price}`);
}

// handleProduct(product)

handleProduct({
    name: "tv",
    price: 5999
})


const myarr = [100, 200, 500 , 800]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myarr));



