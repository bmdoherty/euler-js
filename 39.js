"use strict"
console.time("timer")

function solutions(p) {
  let solutions = []
  let lowerLimit = p / 6
  let upperLimit = p / 2

  for (let a = lowerLimit; a < upperLimit; a++) {
    for (let b = a + 1; b + a < p; b++) {
      let c = p - a - b
      if (a * a + b * b == c * c) {
        solutions.push([a, b, c])
      }
    }
  }
  return solutions
}

const f = (limit) => {
  var max = 0
  var perimeter = 0
  for (let i = 0; i <= limit; i++) {
    if (solutions(i).length > max) {
      max = solutions(i).length
      perimeter = i
    }
  }
  return perimeter
}

module.exports = f
console.timeEnd("timer")
