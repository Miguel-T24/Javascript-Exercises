'use strict'

// 12. Write a javascript program to sum the multiples of 3 and 5 indes 1000

let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);