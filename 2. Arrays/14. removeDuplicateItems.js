'use strict'

let array = [1,2,2,3,3,4,4];

array = Array.from(new Set(array));
console.log(array);