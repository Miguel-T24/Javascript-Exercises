'use strict'

// 22. Write a javascript program to compute the union of two arrays

const compute = (array1, array2) =>{
    let array = array1.concat(array2);
    array = new Set(array);

    return Array.from(array);
}

console.log(compute([1,2,3] , [100,2,1,10]));