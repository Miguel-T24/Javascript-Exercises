'use strict'

// 94. Write a javascript program to find the number which appears most in given array of integers

const appearsMost = (array) =>{
    let unique = Array.from(new Set(array));
    let count = 0;
    let max = 0;
    let el = 0;
    for(let i in unique){
        for(let j in array){
            if(unique[i] === array[j]){
                count += 1 
            }
        }
        if(count > max){
            max = count;
            el = unique[i];
        }
        count = 0;
    }

    return[max,el];
}

let [n,element] = appearsMost([1,2,3,2,2,8,1,9])

console.log(`The most element appears is ${element} that appears ${n} times`);