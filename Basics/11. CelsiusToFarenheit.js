'use strict'

console.log(`Convert Celsius to Farenheit and Farenheit to Celsius`);

let opc = parseInt(prompt("Press 1 if you want convert from Celsius to Farenheit\nPress 2 if you want convert from Farenheit to Celsius"))

console.log(opc);


if (opc === 1){
    let temp = prompt("Enter the tempeture in Celsius:")
    console.log(`${temp}°C is ${temp * (9/5) + 32}°F`);
}else{
    let temp = prompt("Enter the tempeture in farenheit: ")
    console.log(`${temp}°F is ${(temp - 32) * (5/9)}°C`);
}