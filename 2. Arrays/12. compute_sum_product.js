'use strict'

// 12. Write a javascript program to compute the sum and produc of an arraya of integers

const computeSum =(array) =>{
    let arraysum = array.reduce((x,y) => x + y);
    let arraypro = array.reduce((x,y) => x * y);

    return [arraysum, arraypro];
}

let [compute, product] = computeSum([1,2,3,4,5,6])

console.log(`compute: ${compute} , product: ${product}`);