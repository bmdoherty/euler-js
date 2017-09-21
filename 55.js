"use strict"
console.time("timer")

const isPalindome = (a) => {
    return a == parseInt(`${a}`.split('').reverse().join(''))
}

const reverse = (a) => {
    return parseInt(`${a}`.split('').reverse().join(''))
}

const isLychrel = (n) => {
    let i = 0
    let isLychrel = true
    n = n + reverse(n)

    while( i < 50 && !isPalindome(n) ){
        n = n + reverse(n)
        i++
    }

    if( isPalindome(n) ){
        isLychrel = false        
    }
    return isLychrel
}

const f = (n) => {
    let lychrelCount = 0

    for(let i=1; i<n; i++){
        if( isLychrel(i)){
            lychrelCount++ 
        }
    }

    return lychrelCount
}

module.exports = {f, isPalindome, isLychrel}
console.timeEnd("timer")