'use strict'

// 87. Write a javasciprt program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from anothe array by swapping at most one pair elements

const similar = (array1, array2) =>{
    if (array1.length === array2.length){
        for (let i = 0; i < array1.length ; i++){
            if(array1[i] === array2[i]){
                return true
            }
        }
        return false
    }else{
        return "the array don;t have same lenght"
    }
}

console.log(similar([10,20,30], [10,20,30]))
console.log(similar([10,20,30], [30,10,20]))
console.log(similar([10,20,30,40], [10,30,20,40]))