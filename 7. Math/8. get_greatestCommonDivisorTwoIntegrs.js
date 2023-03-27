'use strict'

// 9. Write a javascirpt function to get the greatest common divisor of two integers

function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));