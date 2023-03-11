'use strict'

// 66. Write a javascript program to display the city name if the striong begins with "Los" or "New" otherwise return blank

const cityName = (city) =>{
    return (city.slice(0,3) === "Los" || city.slice(0,3) === "New")
    ? city
    : "Blank"
}

console.log(cityName("Los Angeles"));
console.log(cityName("New York"));
console.log(cityName("Miami"));