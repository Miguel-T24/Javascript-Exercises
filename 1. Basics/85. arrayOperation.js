'use strict'

// 85. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

function alternate_Sums(arr) {
    var result = [0, 0];
    for(var i = 0; i < arr.length; i++) 
    {
      if(i % 2) result[1] += arr[i];
      else
        result[0] += arr[i];
    }
    return result
  }
  
  console.log(alternate_Sums([1, 3, 6, 2, 5, 10]))