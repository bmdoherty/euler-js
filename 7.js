
// What is the 10 001st prime number?

const isPrime = (number, primes) => {
    let limit = primes.length

    for (let i = 0; i <= limit; i++){
        if(number % primes[i] === 0){
            return false;
        }
    }
    return number != 1
}

const f = (n) => {
    let primes = [2]
    let candidate = 3

    while( primes.length < n){
       if( isPrime(candidate, primes) ){
           primes.push(candidate)
       }
       candidate++
    }
    
    return primes.pop()
}

module.exports = f;