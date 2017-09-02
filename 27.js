var isPrime = []

const sieve = (n) => {
    let sieve = []
    let primes = []
    let upperLimit = Math.sqrt(n)

    // Make an sieve from 2 to (n - 1)
    for (var i = 0; i <= n; i++) {
        sieve.push(true);
    }

    // identify primes
    for (let i = 2; i <= upperLimit; ++i) {
        if (sieve[i]) {
            // i has not been removed it is prime
            // leave sieve[i] as true

            // remove multples of this prime from sieve
            for (var j = i + i; j <= n; j = j + i) {
                sieve[j] = false;
            }
        }
    }
    return sieve
}

const f = (limit) => {
    isPrime = sieve(1000) 
    let maxPrimes = 0
    let product = 1
    
    for(let a=-limit; a<=limit; a++){
        for(let b=-limit; b<=limit; b++){
            let n = 0
            while( isPrime[ Math.abs( (n * n) + (a*n) + (b) ) ] ){
                n++
            }
            if(n > maxPrimes){
                product = a * b
                maxPrimes = n
            }
        }
    }
    return product
}

module.exports = f
