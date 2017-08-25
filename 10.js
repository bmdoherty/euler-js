
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const f = (n) => {
    let sieve = []
    let primes = []
    let upperLimit = Math.sqrt(n)

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        sieve.push(true);
    }

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

    // extract primes
    for (var i = 2; i < n; i++) {
        if(sieve[i]) {
            primes.push(i);
        }
    }    

    return primes.reduce( (sum, value) => sum = sum + value)
}

module.exports = f;


