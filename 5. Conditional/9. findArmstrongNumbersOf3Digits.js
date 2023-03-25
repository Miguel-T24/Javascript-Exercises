'use strict'

// 9. Write a javascirpt program to find the armstrong numbers of 3 digits.

// Note: the armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an armstrong number since 3**3 + 7**3 + 1**3 = 371.


const armstrong = (num) =>{
    let sum = 0;
    num = Array.from(num.toString())
    for(let i in num){
        sum+=Math.pow(parseInt(num[i]),3);
    }

    return (sum === parseInt(num.join("")))?"It's Armstrong": "It is NOT Arsmtrong";
}

console.log(armstrong(371));