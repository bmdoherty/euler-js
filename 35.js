
const isCircular = (n, isPrime) => {
    let arr = `${n}`.split('')
    let circular = true
    let i = 1

    while( circular && i<arr.length){
        let end = arr.slice(0, i)
        let candidate = arr.slice(i).concat(end).join('')

        circular = isPrime[candidate]
        i++
    }
    return circular
    
}

const sieve = (n) => {
    let sieve = []
    let primes = []
    let upperLimit = Math.sqrt(n)

    // Make an sieve from 2 to (n - 1)
    for (var i = 0; i <= n; i++) {
        sieve.push(true);
    }

    sieve[1] = false;

    // identify primes
    for (let i = 2; i <= upperLimit; ++i) {
        if (sieve[i]) {
            for (var j = i + i; j <= n; j = j + i) {
                sieve[j] = false;
            }
        }
    }
    return sieve
}

const f = (n) => {
    let isPrime = sieve(n)
    let primes = []

    for (let i = 2; i <=isPrime.length; i++) {
        if(isPrime[i]) {
            primes.push(i);
        }
    }      

    return primes.filter( i => isCircular(i, isPrime) ).length
}

module.exports = f
