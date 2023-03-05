'use strict'

// 42. Write a javascript program to check whether three given numbers are increasing in strict mode or in soft mode

function number_order(x,y,z){
    (y > x && z > y)
        ?console.log(`Strict Mode`)
            :(z > y)?console.log(`Soft Mode`)
        :console.log(`Undefined`) 
}

console.log(number_order(10,15,31));
console.log(number_order(24,22,31));
console.log(number_order(50,21,15));