"use strict"
console.time("timer")

const request = require('request');

const makeAscii = () => {
    let o = {}
    for(let i=65; i<90; i++){
        o[String.fromCharCode(i)] = i - 64
    }   

    return o 
}

const makeTriangleArray = () => {
    let a = []

    for(let n=1; n<20; n++){
        let i = n * (n+1) / 2
        a[i] = true
    }   

    return a
}

const ascii = makeAscii()
const isTriangle = makeTriangleArray()

async function getWords () {
  return await new Promise((resolve, reject) => {
     request('https://projecteuler.net/project/resources/p042_words.txt', (err, res, body) => {
      if (err) {
        reject(err)
      }
      resolve(body)
    })
  })
}

const sumOfWordChars = (word) => {

    return  word.split('').map( v => ascii[v]).reduce( (s,v) => s = s +v ) 
}

const isTriangleWord = (word) => {
    
    return  isTriangle[sumOfWordChars(word)]
}

async function f() {

    let response = await getWords()
    let words = response.replace(/["]+/g, '').split(',')

    let triangleWords = words.filter( v => isTriangleWord(v))

    return  triangleWords.length
}

module.exports = {f, sumOfWordChars, isTriangleWord}
console.timeEnd("timer")