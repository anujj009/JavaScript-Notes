const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

//forin loop

for (const key in myObj) {
//   console.log(`${key} for ${myObj[key]}`);
    
}

const pro = ["js", "rb","py"]

// for (const key in pro) {
//    console.log(pro[key]);
// }

// pro.forEach( function (item){           //call-back function
//     console.log(item);
// } )

// pro.forEach( (item)  => {
//     console.log(item);
// } )

// function print(item) {
//     console.log(item);
// }

// pro.forEach(print)

pro.forEach( (item,index, arr) => {
    // console.log(item,index,arr);
} )

const myCode = [
    {
        l1 : "js",
        name: "java"
    },
    {
        l2 : "py",
        name: "python"
    }
]

myCode.forEach( (item) => {
    // console.log(item.name);
} )


// const values = myCode.forEach( (item) => {
//     console.log(item);
// } )






