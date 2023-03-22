'use strict'

// 131. Write a javascript program to crate an array of prefix sums of th given array

const prefixSum =(array) => {
    let array1 = []
    let ac = 0;
    for (let i in array){
        if(i === 0){
            array1.push(array[i]);
            ac = array[i];
        }
        else{
            ac += array[i]; 
            array1.push(ac)
        }

    }
    return array1;
}

console.log(prefixSum([1,2,3,4,5]));
console.log(prefixSum([1,2,-3,4,5]));