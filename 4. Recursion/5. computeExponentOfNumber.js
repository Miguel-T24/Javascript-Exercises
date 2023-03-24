'use strict'

// 5. Writte a javascript program to compute the exponent of number

const computeExponent = (n, ex) =>{
    if(ex === 0){return 1}
    return n * computeExponent(n , ex - 1)
}

console.log(computeExponent(8,2));
