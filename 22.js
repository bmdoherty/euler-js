// What is the total of all the name scores in the file? 
const request = require('request');

async function getNames () {
  return await new Promise((resolve, reject) => {
     request('https://projecteuler.net/project/resources/p022_names.txt', (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

const sumOfLetters = (sum, value) => {
    return sum = sum + value.charCodeAt(0) - 64 
}

const score = (sum, value, index) => {
    let name = value.split('')
    let position = index + 1
    let lettersSum = name.reduce( sumOfLetters, 0 )

    return sum = sum + (position * lettersSum)
}

const getTotalScore = (arr) => {
    return arr.reduce( score , 0 )
}

async function f() {
    let response = await getNames()
    let names = response.replace(/["]+/g, '').split(',').sort()

    return  getTotalScore(names) 
}

module.exports = {f, getTotalScore, score, sumOfLetters}