'use strict'

// 16. Write a javascript function to get a copy of the objects where the keys have become the values and the values the keys.



const invert = (object) =>{
    let entries = Object.entries(object);
    let copy = {}

    for (let i in entries){
        copy[entries[i][1]] = entries[i][0];
    }

    return copy;
}

console.log(invert({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));