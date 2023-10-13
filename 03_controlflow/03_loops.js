// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("five");
    }
    // console.log(element);
    
}

// for (let i = 0; i < 5; i++) {
//     console.log(`outer loop: ${i} `);
//     for (let j = 0; j < 5; j++) {
//         console.log(`inner loop ${j} and inner loop ${i}`);
        
//     } 
// }

let myarr = ["flash", "batman","superman"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log("five ");
//         break;
//     }
//     console.log(index);
    
// }

for (let index = 1; index <= 10; index++) {
    if (index==5) {
        console.log("five ");
        continue;
    }
    console.log(index);
    
}

