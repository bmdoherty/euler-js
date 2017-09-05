"use strict"

const sieve = (n) => {
    let sieve = []
    let truncatablePrimes = []
    let upper = Math.sqrt(n)

    for(let i=0; i<n; i++){
        sieve.push(true)
    }

    for(let i=2; i<=upper; i++){
        if( sieve[i] ){
            for(let j = i + i; j <= n; j = j + i){
                sieve[j] = false
            }
        }
    }  
    
    sieve[1] = false

    for(let i=0; i<=n; i++){
        if(sieve[i]){
            let leftDigits = `${i}`.split('').slice(0)
            let rightDigits = `${i}`.split('').slice(0)           
            let isTruncable = true

            while( leftDigits.length > 1 && isTruncable){
                leftDigits.shift()
                rightDigits.pop()                
                isTruncable = sieve[leftDigits.join('')] && sieve[rightDigits.join('')]
            }  

            if(isTruncable){
                truncatablePrimes.push(i)
            }          
        }
    }

    // NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
    truncatablePrimes = truncatablePrimes.filter( v => v > 7)

    return truncatablePrimes
}

const f = (n) => {
    let truncatablePrimes = sieve(n)

    return truncatablePrimes.reduce( (s,v) => s = s + v)
}

module.exports = {sieve, f}
