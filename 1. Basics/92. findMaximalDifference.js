'use strict'

// 92. Write a javascropt program to find the maximal difference among all posible pairs of a given array of integers.

const maximunDifference = (array) =>{
    let max = 0;
    let dif = 0;

    for (let i in array){
        if(i!=0){
            dif = Math.abs(array[i-1] - array[i]);
            max = i === 1 ? dif:max;
            max = dif > max ? dif : max;
        }
    }

    return max;
}

console.log(maximunDifference([1,2,3,8,9]));
console.log(maximunDifference([1, 2, 3, 18, 9]));
console.log(maximunDifference([13, 2, 3, 8, 9]));