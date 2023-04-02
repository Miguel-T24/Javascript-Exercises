'use strict'

// 26. Write a javascript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number

const pairIndex = (array, target_num)=>{

    for(let i in array){
        if(i!=0){
            if(array[i] + array[i-1] === target_num){return [i-1,parseInt(i)]}
        }
    }

    return "No valid";
}


console.log(pairIndex([10,20,10,40,50,60,70], 50));