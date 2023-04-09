'use strict'

// 55. write a javascript function to check whether a string is pangram or not.

const test = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  console.log(test("The quick brown fox jumps over the lazy dog"))
  console.log(test("Waltz, bad nymph, for quick jigs vex."))
  console.log(test("The five boxing wizards jump quickly."))
  console.log(test("The boxing wizards jump quickly."))