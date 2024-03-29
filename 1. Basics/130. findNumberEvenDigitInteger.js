'use strict'

// 130. Wrte a javascript program to find the number of even digits in a given integer

function even_digits(num) {
    var ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      num = Math.floor(num / 10);
    }
    return ctr;
  }
  
  console.log(even_digits(123));
  console.log(even_digits(1020));
  console.log(even_digits(102));