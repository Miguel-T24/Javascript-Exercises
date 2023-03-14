'use strict'

// 34. Write a javascript program to find the larger number from the two give positive integer, the two numbers are in the range 40 60 inclusive.


function larger(num1, num2){
    function checkRange(num){
        return (num>=40 && num<=60)?true:false
    }

    ((checkRange(num1)) && (checkRange(num2)) )
    ? (num1 === num2)
        ? console.log(`Los numeros son iguales`)
        : (num1 > num2)
            ?console.log(`${num1} es mayor que ${num2}`)
            :console.log(`${num2} es mayor que ${num1}`)
    :console.log(`No se puede realizar la operacion porque los numeros no se encuentran dentro del rango`);
}

larger(30, 35);
larger(30, 50);
larger(50, 30);
larger(50, 50);
larger(50, 55);
larger(56, 50);