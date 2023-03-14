'use strict'

// 88. Write a javascript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two goven integers are similar. Check Whether two given integers are similar or not.

function checking_numbers(x, y, divisor) {
    if(x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
      0) {
      return true;
    }
    return false;
  }
  
  console.log(checking_numbers(10, 25, 5))
  console.log(checking_numbers(10, 20, 5))
  console.log(checking_numbers(10, 20, 4))