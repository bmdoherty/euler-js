
// Evaluate the sum of all the amicable numbers under 10000.

const divisors = (n) => {
    let divisors = [];
    let end = Math.floor(Math.sqrt(n)); 

    if( [1,2,3].indexOf(n) >= 0 ){
        return [1]
    }

    for(let i = 1; i<=end; i++){
        if ( n % i == 0 ){ 
            divisors.push(i)

            if ( i*i !== n && i !== 1){
               divisors.push(n / i); 
            }
        }
    }

    return divisors
}

const f = (n) => {
    let lookup = []
    let sieve = Array(n).fill(false)
    let sum 

    // 
    for(let i=0; i<n; i++){
        let d = divisors(i)
        let num = {
            'i': i,
            'd': d,
            'abundant': d.reduce( (sum, value) => sum = sum + value, 0 ) > i ? true : false
        }
        lookup[i] = num
    }

    let abundantNumbers = lookup.filter( i => i.abundant === true)

    for(let i=0; i<abundantNumbers.length; i++){
        for(let j=0; j<abundantNumbers.length; j++){
            let sum = abundantNumbers[i]['i'] + abundantNumbers[j]['i']
            sieve[sum] = true            
        }
    }

    sieve = sieve.slice(0,n)
    sum = sieve.reduce( (s,v,i,a) => {
        if (v === false) {
            s = s + i
        }
        return s
    },0)

    return sum 
}

module.exports = f