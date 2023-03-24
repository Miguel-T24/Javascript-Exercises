'use strict'

// 2. Write a javascript conditional statement to find the isgn of product of three numbers.

const signThree = (n1,n2,n3) => {
    return (n1*n2*n3 < 0)?"-":"+"
}

console.log(signThree(3,7,2));
console.log(signThree(3,-7,2));