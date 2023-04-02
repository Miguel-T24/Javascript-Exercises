'use strict'

// 27. Write a javascript function to retrieve the value of a given property from all elements in an array

const retrieve = (array) =>{
    // console.log(array);
    // let result = [];
    // for(let i in array){
    //     if(
    //         !isNaN(array[i]) && 
    //         typeof array[i] != "boolean" &&
    //         array[i]!=null &&
    //         array[i]!=0
    //     ){
    //         result.push(array[i]);
    //     }
    // }
    // return result

    return array.filter(el => (!isNaN(el) && typeof el != "boolean" && el!=null && el!=0))
}

console.log(retrieve([NaN,0,15,false,-22,undefined,47,null]));