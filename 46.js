"use strict"
console.time("timer")



const sieve = (n) => {
    let primes = new Set()
    let oddComposites = new Set()

    let limit = Math.sqrt(n)

    for(let i=1; i<=n; i++){
        primes.add(i)
    }

    primes.delete(1)

    for(let i=2; i<limit; i++){
        if( primes.has(i) ){
 
            for(let j=i+i; j<=n; j=j+i){
                primes.delete(j)
                if( j % 2 == 1){
                 oddComposites.add(j)
                }
            }
        }
    }

    return [primes, oddComposites]
}

const twiceASquareSet = (n) => {
    let twiceASquare = new Set()

    for(let i=1; i<=n; i++){
        twiceASquare.add( 2*(i*i) )
    }

    return twiceASquare
}

const f = () => {
    let [primes, oddComposites] = sieve(9999)
    let twiceASquare = twiceASquareSet(99)
    
    for(let o of oddComposites){
        for(let t of twiceASquare){
            if( o > t && primes.has( o - t )){
                oddComposites.delete(o)
                break
            }
        }
    }

    return [...oddComposites].sort( (a,b) => a-b)[0]
}

module.exports = f
console.timeEnd("timer")

