'use strict'

// 63. Write a javascript program to create a string using the middle three characaters of given string of odd lenght. The string must be greater or equal to tree


const createString = (str) => {
    (str.length / 2 === 0 || str.length < 3)
    ?console.log(`No se puede realizar esta operacion`)
    :console.log(str.slice(Math.round(str.length / 2) - 2 , Math.round(str.length / 2) + 1 ));
}

createString("HTML5");
createString("Python");
createString("PHP");
createString("Exercises");
createString("al");