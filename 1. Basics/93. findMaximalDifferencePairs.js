'use strict'

// 93. Write a javascirpt program to find the maximal difference among all possible pairs of a given array of integers


const maximalDifferencePairs = (array) =>{
    let dif = 0;
    let max = 0;
    for(let i in array){
        for(let j in array){
            if(i!=array.length-1 && j != 0){
                dif = Math.abs(array[i] - array[j]);
                max = i === 0 ? dif : max;
                max = dif>max?dif:max;
            }
        }
    }

    return max;
}


console.log(maximalDifferencePairs([1, 2, 3, 8, 9]));
console.log(maximalDifferencePairs([1, 2, 3, 18, 9]));
console.log(maximalDifferencePairs([13, 2, 3, 8, 9]));
