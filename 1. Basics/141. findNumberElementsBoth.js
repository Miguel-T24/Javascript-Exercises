'use strict'

// 142. Write a  javascript program to find the numbers of elements which presentes in both of the given arrays

const bothArrays = (array1, array2) =>{
    let result = [];

    for (let i in array1){
        for (let j in array2){
            if (array1[i] === array2[j]){
                result.push(array1[i]);
            }
        }
    }

    result = Array.from(new Set(result));
    return [result , result.length];
}


let [array,count] = bothArrays([1,2,3,4], [1,2,3,4])
console.log(`The array: ${array} have ${count} number of elements in both`);
[array,count] = bothArrays([1,2,3,4], [1,2,3,5])
console.log(`The array: ${array} have ${count} number of elements in both`);