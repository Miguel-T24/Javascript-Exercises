'use strict'

// 6. Write a javascript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accep 025468 th output should be 0-254-6-8

const insetDashes = (number) =>{
    let array = Array.from(number.toString());
    for(let i = 0 ; i < array.length ; i++){
        if (i!=0){
            if(Number(array[i-1]) % 2 === 0 && Number(array[i]) % 2 === 0){
                array.splice(i,0,"-")
            }
        }
    }

    return array.join("")
}

console.log(insetDashes(25468));