const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0 )

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0 )

console.log(myTotal);

const cart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "sql course",
        price: 99
    },
]

let pay = cart.reduce( (acc, item) => acc + item.price , 0)

console.log(pay);


