'use strict'

// 10. There are two arrays with individual values, write a javasciprt program to compute the sum of each individual index value from the given arrays.

const comput = (array1, array2) => {
    if(array1.length > array2.length){
        for(let i = array1.length; i > array2.length; i--){
            array2.push(0);
        }
    }else if(array1.length < array2.length){
        for(let i = array2.length; i > array1.length; i--){
            array1.push(0);
        }
    }
    for (let i=0;i<array1.length;i++){
        array1[i] = array1[i] + array2[i]
    }
    return array1;
}

console.log(comput([1,0,2,3,4] , [3,5,6,7,8,13]));