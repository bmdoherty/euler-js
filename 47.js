"use strict"
console.time("timer")

const getAllFactorsFor = (remainder, factors=[]) => {
    for (let i = 2; i <= remainder; i++) {
        if ((remainder % i) === 0) {
            factors.push(i);
            getAllFactorsFor(remainder / i, factors);
            break
        }
    }
    
    return factors;
}

const f = () => {

    return getAllFactorsFor(644)
}

module.exports = f
console.timeEnd("timer")

