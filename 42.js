// What is the total of all the name scores in the file? 
const request = require('request');

const ascii = {}

async function getNames () {
  return await new Promise((resolve, reject) => {
     request('https://projecteuler.net/project/resources/p042_words.txt', (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

const sumOfWord = (word) => {

    if( !ascii['A'] ){

        for(let i=65; i<90; i++){
            ascii[String.fromCharCode(i)] = i - 64
        }
    }

    return  word.split('').map( v => ascii[v]).reduce( (s,v) => s = s +v ) 
}

async function f() {

    let response = await getNames()
    let names = response.replace(/["]+/g, '').split(',').sort()

    return  getTotalScore(names) 
}

module.exports = {f, sumOfWord}