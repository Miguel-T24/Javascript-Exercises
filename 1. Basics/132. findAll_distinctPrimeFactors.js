'use strict'

// 132. Write a javascript program to find all distinct prime factors of a given integer


const distinctPrimeFactors = (num) => {
    function is_prime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++)
        {
          if (num % i === 0) return false;
        }
        return true;
      }
      const result = [];
      for (let i = 2; i <= num; i++)
      {
        while (is_prime(i) && num % i === 0) 
        {
          if (!result.includes(i)) result.push(i);
          num /= i;
        }
      }
      return result;    
}

console.log(distinctPrimeFactors(100));
console.log(distinctPrimeFactors(101));