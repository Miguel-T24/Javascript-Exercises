'use strict'

// 2. Write a javascript porgram to find the greatest commom divisor of twi positive numbers

let gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(2154, 458));