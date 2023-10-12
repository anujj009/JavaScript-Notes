//     JavaScript Execution Context

// {} => 1.Global Execution Context 
// 2.Function Execution context
// (3.)Eval Execution Context

// {} - Memory Creation Phase
//       - Execution Phase  

let val1 = 5
let val2 = 8
function addnum(num1, num2) {
    let total = num1+num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,20)

// 1) Global execution == this

// 2) Memory phase
    // val1 = undefined
    // val2 = undefined
    // addnum = definition
    // result1 = undefined
    // result2 = undefined

// 3) Execution phase
    // val1 = 5
    // val2 = 8
    // addnum = (new variable environment + execution thread)   ~ deleted after execution
                // Memory phase             Execution  
                // val1 = undefined        val1 =5
                // val2 = undefined        val2 = 8
                // total = undefined       total = 13 (return)
    


/************************************* */
// Call Stack

// |      |
// |      |
// |__2___|
// |__1___|
// |__GE__|

// LIFO




