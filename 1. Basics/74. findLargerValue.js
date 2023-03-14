'use strict'

// 74. Write a javascript proram to find the larger value between the firts or last and set all the other elements with that value. Display the new array.


const maxim = (array) =>{
    let maximo = array[0] > array[2] ? array[0] : array[2]
    array[0] = maximo;
    array[1] = maximo;
    array[2] = maximo;

    return array
}

console.log(maxim([20,30,40]));
console.log(maxim([-7,-9,0]));
console.log(maxim([12,10,3]));