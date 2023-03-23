'use strict'

// 145. Write a javascript program to find the maximum integer n such that 1 + 2 + ... + n < = a given integer.

const maximumn = (n) =>{
    let sum = 2;
    let count = 0;

    for(let i = 1 ; sum < n ; i++){
        sum += i ;
        count += 1;
    }

    return count;
}

console.log(maximumn(11));
console.log(maximumn(15));