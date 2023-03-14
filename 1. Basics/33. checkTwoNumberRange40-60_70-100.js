'use strict'
// 33. Write a javascript program to check whether two numbers are in range 40..60 or int the range 70..100 inclusive

function checkRange(number1, number2){
    function checkRange4060(number){
        return (number >= 40 && number <=60)?true:false;
    }

    function checkRange70100(number){
        return (number >= 70 && number <=100)?true:false;
    }

    return (
        (checkRange4060(number1) && checkRange4060(number2))
        || 
        ((checkRange70100(number1)) && checkRange70100(number2))
        )
        ?true
        :false;
    
}

console.log(checkRange(44, 56));
console.log(checkRange(70, 95));
console.log(checkRange(50, 89));