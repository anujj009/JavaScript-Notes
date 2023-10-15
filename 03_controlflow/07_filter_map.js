// Filter
const num = [1,2,3,4,5,6]

// let newNum = num.filter( (n) => n>3 )
// let newNum = num.filter( (n) => {       // {} = return mandatory
//     return n>4
// } )

// const newNums  = []
// num.forEach( (n) => {
//     if (n>3){
//         newNums.push(n)
//     }
// })

// console.log(newNums);

const books = [
    {
        title : 'book1',
        genre : 'fiction',
        publish : '1981',
        edition : '2004'
    },
    {
        title : 'book2',
        genre : 'non-fiction',
        publish : '1990',
        edition : '2005'
    },
    {
        title : 'book3',
        genre : 'history',
        publish : '1995',
        edition : '2006'
    },
    {
        title : 'book4',
        genre : 'fiction',
        publish : '1988',
        edition : '2009'
    }
];

// const userBooks = books.filter( (bk) => bk.genre === 'history')
const userBooks = books.filter( (bk) => { 
    return bk.publish >= '1990' && bk.edition==='2006'
})

// console.log(userBooks);

/*********************************** ************/

// Map

// const num2 = num.map( (n) => n+10 )

const num2 = num
            .map( (n) => n*10 )
            .map( (n) => n+1 )
            .filter( (n) => n>=40)

console.log(num2);


