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

let primes = new Set()

const f = (n) => {
    primes = sieve(999999)
    let pArray = [...primes]

    for(let i=0; i<pArray.length; i++){
        let primeString = `${pArray[i]}`
        let digitArray = primeString.split('')
        
        for(let j=0; j<digitArray.length; j++){
            let primeCount = 1
            let digit = digitArray[j]
            let digitInteger = parseInt(digit, 10)

            //  digit needs to be small enough to allow for required substitions
            if( 10 - digitInteger >= n ){ 
                for(let k=0; k<10; k++){
                    // dont replace digit with itself
                    if( digitInteger !== k ){ 
                        let candidate = primeString.replace(new RegExp(digit, 'g'), k)

                        // dont check candidates with leading zeros
                        if( candidate.indexOf(0) != 0){
                            candidate = parseInt(candidate)

                            if( primes.has(candidate) ){
                                primeCount = primeCount + 1
                            }                    
                        }
                    }
                }
                if(primeCount >= n){
                    return pArray[i]
                }                
            }
        } 
    }
    
    return undefined
}

module.exports = f
console.timeEnd("timer")