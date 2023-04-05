'use strict'

// 51. Write a javascript program to check if an array is a factor chain or not.

function test(nums) { 
    for (let i = 0; i < nums.length - 1; i++) 
    {
      if (nums[i+1] % nums[i] != 0) {
        return false;            
      }
    }
    return true;
  }
let nums = [2, 4, 8, 16, 32]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 64]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));
nums = [2, 4, 16, 32, 68]
console.log("Original array: ",nums)
console.log("Check the said array is a factor chain or not?");
console.log(test(nums));