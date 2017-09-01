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

    // extract primes from sieve
    for (var i = 2; i <=n; i++) {
        if(sieve[i]) {
            primes.push(i);
        }
    }  

    return primes
}


const getCycle = (p,q) => {
    let lookup = {}
    let i = 0
    let cycle = ''
    let nominator = p
    let digit 

    while(true){
        lookup[nominator] = i //remember
        nominator = nominator * 10
        digit = Math.floor(nominator / q)
        cycle = cycle + (''+digit)
        nominator = nominator - (digit * q)
        
        //terminates, no cycle
        if(nominator == 0){
            return ''
        }

        // we have been here before
        if( lookup[nominator] >= 0){
            return cycle
        }
    }
}

const f = (n) => {
    let d = 0
    let maxCycle = ''
    let primes = sieve(n)

    for(let i=0; i<primes.length; i++){
        let cycle = getCycle(1, primes[i])
        
        if (cycle.length > maxCycle.length){
            maxCycle = cycle
            d = primes[i]
        }
    }

    return d
}

module.exports = {f, getCycle}
