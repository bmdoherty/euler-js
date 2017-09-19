"use strict"
console.time("timer")

const sieve = (n) => {
    let primes = new Set()
    let limit = Math.sqrt(n)

    for(let i=2; i<=n; i++){
        primes.add(i)
    }

    for(let i=2; i<=limit; i++){
        if( primes.has(i) ){
            for(let j=i+i; j<=n; j=j+i){
                primes.delete(j)
            }
        }
    }

    return primes
}

const findLimit = (primes, n) => {
    let pArray = [...primes]
    let i = 1
    let sum = 2

    while( sum < n){
        sum = sum + pArray[i]
        i++
    }
    return i
}

const f = (n) => {
    let primes = sieve(n)
    let max = findLimit(primes, n)
    let pArray = [...primes].slice(0, max)
    let maxSequence = []
    let sequence = []
    let sum = 0

    for(let i=0; i<=max; i++){
        sequence = [pArray[i]]
        sum = pArray[i]

        for(let j=i+1; sum<n; j++){
            sequence.push( pArray[j] )
            sum = sum + pArray[j]

            if( primes.has( sum ) && sequence.length > maxSequence.length){
                maxSequence = sequence.slice(0)
            }
        }
    }
    
    return maxSequence.reduce( (s,v) => s = s + v)
}

module.exports = f
console.timeEnd("timer")