"use strict"
console.time("timer")

const compare = (a,b) =>{
    let aArray = `${a}`.split('').sort( (a,b) => a-b )
    let bArray = `${b}`.split('').sort( (a,b) => a-b )

    return aArray.length === bArray.length && aArray.every( (v,i) => v === bArray[i] )
}

const countMultiples = (n) => {
    let i = 2
    let candidate = n * i++

    // number must start with 1 to achieve * 6 also, something * 6 must be divisable evenly by 3
    if( `${n}`.split('').pop() == 1 && n % 3 === 0){
        return false
    }

    while( compare(n, candidate) ){      
        candidate = n * i++
    }

    return i - 1 // minus final failed attempt
}

const f = () => {
    let n = 2

    while( countMultiples(n) < 6 ){
        n++
    }

    return n
}

module.exports = f
console.timeEnd("timer")