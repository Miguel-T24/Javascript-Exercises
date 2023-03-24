'use strict'

// 1. Write a javascript program to calculate factorial of a number.

const factorial = (n) =>{
    if(n === 0){return 1}
    return n * factorial(n-1)
}

console.log(factorial(5));


/*
1. --- 5 * fac(n-1) = 120
2. --- 4 * fac(n-1) = 24
3. --- 3 * fac(n-1) = 6
4. --- 2 * fac(n-1) = 2
5. --- 1 * fac(n-1) = 1
6. --- 0 -> return 1
*/ 