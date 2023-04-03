'use strict'

// 25. Write a javascript function that accept a list of country names as input and returns the longest country name as output.


const longestName = (countries) =>{
    countries = countries.sort((x,y) => (x.length>y.length)?-1:1)
    return countries[0];
}

console.log(longestName(["Australia", "Germany", "United States of America"]));