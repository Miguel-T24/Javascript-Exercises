'use strict'
let array = [];
for (let i = 0 ; i < 16 ; i++){
    array.push(i);
}

for (let i in array){
    if(i % 2 == 0){
        console.log(i + " is Even");
    }else{
        console.log(i + " is Odd");
    }
}