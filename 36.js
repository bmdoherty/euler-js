const sieve = (n) => {
    let sieve = []
    let palindroms = []

    for(let i=0; i<n; i++){
        sieve.push(true)
    }

    for(let i=0; i<n; i++){
        let reversed = parseInt( `${i}`.split('').reverse().join('') )
        //console.log( `${i} ${reversed}` )
        if( i != reversed){
            sieve[i] = false
        }
    }    
    
    sieve = sieve.filter( i => i == true)

    return sieve
}

const f = (n) => {
   
    console.log(sieve(100).length)
    return 10
}

module.exports = {sieve, f}
