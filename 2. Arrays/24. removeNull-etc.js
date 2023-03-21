'use strict'

// 24. Write a javascript function to remove null 0 """""" false undefined and NaN values from an array

const remove = (array) =>{

    let bool = [null, 0 , '' , false, undefined];
    for (let i in array){
        if(bool.some(z => z === array[i] || Number.isNaN(array[i]))){
            array.splice(i,1);
        }
    }
    return array;
}

console.log(remove([NaN, 0, 15, false, -22, '', undefined , 47, null]));