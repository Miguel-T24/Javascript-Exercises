// 82. Write a javascript program to add two positive integers without carry

const addTwoNumberWithoutCarry = (num1, num2) =>{
    if (num1.toString().length != num2.toString().length){
        return "The number must be same number of digit";
    }else{
        let array = [];
        let temp;
        for(let i = 0 ; i < num1.toString().length ; i++){
            temp = parseInt(num1.toString()[i]) + parseInt(num2.toString()[i]);
            array.push(temp.toString().at(-1));
        }
        return parseInt(array.join(""));
    }
}

console.log(addTwoNumberWithoutCarry(222,911));
console.log(addTwoNumberWithoutCarry(200,900));