'use strict'


// 56. write a javascript funciotn to check whether a strigng is in pascal case or not

const test = (word) => {
    if (typeof word !== 'string')
    {
      return 'It must be a string.'
    }
    const pattern = /^[A-Z][A-Za-z]*$/
    return pattern.test(word)
  }
  console.log(test("XmlStream"))
  console.log(test("IOStream"))
  console.log(test("IEnumerable"))
  console.log(test("javascript"))