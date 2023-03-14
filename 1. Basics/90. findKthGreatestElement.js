'use strict'

// 90. Write a javascript program to find the kth greatest eleemnt of given array integers

const findKth = (arr , k) =>{
    for (var i = 0; i < k; i++) {
        var max_index = i,
          tmp = arr[i];
    
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[j] > arr[max_index]) {
            max_index = j;
          }
        }
    
        arr[i] = arr[max_index];
        arr[max_index] = tmp;
      }
    
      return arr[k - 1];
}


console.log(findKth([1,2,6,4,5] , 3));
console.log(findKth([-10,-25,-47,-36,0] , 1));