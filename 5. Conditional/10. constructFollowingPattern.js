'use strict'

// 10. Write a javascript program to construct the following pattern, using a nested for loop

for (let i = 0; i < 5 ;i++){
    for (let j = 0 ; j < i + 1 ; j++){
        process.stdout.write("*");
    }
    console.log("\n");
}
