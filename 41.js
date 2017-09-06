"use strict"
console.time("timer")

const compare = (a,b) => {
    return a.every( (v,i) => v == b[i] )
}

const primes = (n) => {
    let sieve = []
    let limit = Math.floor(Math.sqrt(n))

    for(let i=0; i<n; i++){
        sieve[i] = true
    }

    for(let i=2; i<=limit; i++){
        if( sieve[i] ){
            for(let j=i+i; j<=n; j=j+i){
                sieve[j] = false
            }
        }
    }

    for(let i=n; i>0; i--){
        if(sieve[i]){
            let sorted = `${i}`.split('').map(Number).sort( (a,b) => a-b ) 
            let pandigital = [...Array(sorted.length).keys()].map( v=> v+1)

            if( sorted.length > 1 && compare(sorted, pandigital) ){
                return i
            }               
        }
    }

    return undefined
}

const f = () => {

    let p = primes(7654321)

  return p 
}

module.exports = f
console.timeEnd("timer")