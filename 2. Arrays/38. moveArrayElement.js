'use strict'

// 38. Write a javascirpt function to move an array element form one position to another


const move = (array,from,to) =>{
    let value = array.splice(from,1);
    array.splice(to,0,parseInt(value))

    return array;
}


console.log(move([10,20,30,40,50],0,2));
console.log(move([10, 20, 30, 40, 50], -1, -2));