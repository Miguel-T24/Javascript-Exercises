'use strict'

// 5. Write a javascript function to format a number up to specified decimal places

function decimals(n, d) {
    if ((typeof n !== 'number') || (typeof d !== 'number'))
      return false;
           n = parseFloat(n) || 0;
       return n.toFixed(d);
       }
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));