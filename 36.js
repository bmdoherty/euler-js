const sieve = (n) => {
    let sieve = []

    for(let i=0; i<n; i++){
        sieve.push(false)
    }

    // only odd as leading zeros are dropped so binary needs to end in 1
    for(let i=1; i<n; i=i+2){
        let decimalReversed = `${i}`.split('').reverse().join('')

        if( `${i}` == decimalReversed ){
            let binary = i.toString(2)
            let binarylReversed = binary.split('').reverse().join('') 

            if(binary == binarylReversed ){
                sieve[i] = i
            } 
        } 
    }  

    sieve = sieve.filter( i => i !== false)

    return sieve
}

const f = (n) => {
   
    let palindomes = sieve(n)
    
    return palindomes.reduce( (s,v) => s = s + v, 0)
}

module.exports = {sieve, f}
