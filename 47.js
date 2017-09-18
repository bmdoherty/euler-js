"use strict"
console.time("timer")

const sieve = (n) => {
    let primes = new Set()
    let limit = Math.sqrt(n)

    for (let i=1; i<=n; i++) {
        primes.add(i)
    }

    primes.delete(1)

    for(let i=2; i<=limit; i++){
        if( primes.has(i) ){
            for(let j=i+i; j<=n; j=j+i){
                primes.delete(j)
            }
        }
    }

    return primes
}

const primes = sieve(700)

const getPrimeFactorsFor = (N) => {
    let factors = new Set()
    let pIter = primes.values()
    let p = pIter.next().value

    while( N >= p*p ){
        if ( N % p === 0 ) {
            factors.add(p);
            N = N / p
        }
        else{
            p = pIter.next().value
        }
    }

    if(primes.has(N)){
        factors.add(N);
    }
    
    return factors;
}

const f = (n) => {
    let i = 1
    let distinctPrimeFactors = 0
    let consecutiveNumbers = []

    while( consecutiveNumbers.length < n){

        distinctPrimeFactors =  getPrimeFactorsFor(i).size 
        
        if(distinctPrimeFactors == n){
            consecutiveNumbers.push(i)
        }
        else{
            consecutiveNumbers = []
        }
        i++
    }
    
    return consecutiveNumbers[0]
}

module.exports = f
console.timeEnd("timer")

