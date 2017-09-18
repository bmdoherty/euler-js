"use strict"
console.time("timer")

let pentagonals = new Set()
let pairs = []

const getPentagonal = (n) => {
    
    for(let i=1; i<=n; i++){
        let p = i * (3 * i-1) / 2
        
        // check new pentagonal against all others and see 
        // if together they are also pentagonal
        pentagonals.forEach( v => {
            if(pentagonals.has(p - v)){
                pairs.push([v,p])
            }
        })
        pentagonals.add(p)
    }
}

const f = (n) => {
    getPentagonal(n)

    let diff
    let limit = pairs.length

    for(let i=0; i<limit; i++){
        let [a,b] = pairs[i]
        if( pentagonals.has(a + b) ){
                diff = b - a
        }
    }

    return diff
}

module.exports = f
console.timeEnd("timer")

