'use strict'


// 15. Write a javascirpt function to convert an object into a list of [key,value] pairs


const objectToList = (object) =>{
    let keys = Object.keys(object);
    let arreglo  = []
    for(let i in keys){
        arreglo.push([keys[i], object[keys[i]]]);
    }
    return arreglo;
}

console.log(objectToList({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


// other way : entries


let objeto = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}

console.log(Object.entries(objeto));