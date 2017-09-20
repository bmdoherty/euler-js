// What is the total of all the name scores in the file? 
const request = require('request');

async function getHands () {
  return await new Promise((resolve, reject) => {
     request('https://projecteuler.net/project/resources/p054_poker.txt', (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}



async function f() {
    let response = await getHands()
    //let names = response.replace(/["]+/g, '').split(',').sort()

    return  true //getTotalScore(names) 
}

module.exports = {f, getTotalScore, score, sumOfLetters}