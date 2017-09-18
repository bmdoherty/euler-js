"use strict"
console.time("timer")

let triangles = new Set()
let pentagonals = new Set()
let hexagonals = new Set()

const expandSets = (lower, upper) => {
    for(let n=lower; n<=upper; n++){
        triangles.add(n * (n+1)/2 )
        pentagonals.add( n * (3*n-1)/2 )
        hexagonals.add( n * (2*n-1))
    }
}

const f = (lower, upper) => {
    let intersection = new Set()

    while( intersection.size < 1 ){
        expandSets(lower,upper)

        intersection = new Set([...triangles]
            .filter(x => x > 40755)
            .filter(x => pentagonals.has(x))
            .filter(x => hexagonals.has(x)))
            
        lower = upper + 1
        upper = upper + 10000

    }
    
    return intersection.values().next().value
}

module.exports = f
console.timeEnd("timer")

