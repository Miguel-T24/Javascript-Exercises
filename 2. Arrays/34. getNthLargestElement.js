'use strict'

// 34. Write a javascript function to get nth largest element from an unsorted array


const nthLargest = (array, nth) =>{
    array = array.sort((x,y) => (x>y)?1:-1);

    return array[nth];
}

console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));