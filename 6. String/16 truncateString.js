'use strict'

// 16. Write javasciprt function tom trucates a string if it is longer tghan the specified number of characters. Truncated string will end with a translateable ellipsis sequence ("...") (by Default) or specific character

const trucate = (string,n, trucate = "...")=>{
    return string.slice(0,n) + trucate
}


console.log(trucate("Hola Mundo",8));
console.log(trucate("Hola Mundo",8,"-"));

