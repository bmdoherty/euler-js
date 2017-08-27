
// Which starting number, under one million, produces the longest chain?

var lookup = {} 

const collatz = (x) => {
    last = x[x.length-1]

    if ( last === 1){
        lookup[ x[0] ] = x
        return x
    }

    if( last % 2 === 0 ){
        next = last / 2
    }
    else {
        next = 3 * last + 1
    }

    if( lookup[next] ){
        return collatz ( x.concat(lookup[next]) )

    }
    else {
        x.push(next)
        return collatz( x )
    }
}

const f = (n) => {
    let maxChain = [1]

    for(let i=1; i<=n; i++){
        let chain = collatz([i])

        if ( chain.length > maxChain.length ){
            maxChain = chain
        }
    }


    return maxChain[0]
}

module.exports = f;