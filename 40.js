"use strict"

function lookup(limit) {
    let s = ''
    let i = 1

    while( s.length < limit){
        s = s + `${i}`
        i++
    }
    
    return s
}

const f = (a) => {
    let max = Math.max(...a)
    let s = lookup(max)
    
    let product = a.map( v => parseInt(s.charAt(v-1)) ).reduce ( (s,v) => s = s * v)

  return product
}

module.exports = f