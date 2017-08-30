
// Evaluate the sum of all the amicable numbers under 10000.

const divisors = (n) => {
    let divisors = [];
    let end = Math.floor(Math.sqrt(n)); 

    if( [1,2,3].indexOf(n) >= 0 ){
        return [1]
    }

    for(let i = 1; i<end; i++){
        if ( n % i == 0 ){ 
            divisors.push(i)

            if ( i*i !== n && i !== 1){
               divisors.push(n / i); 
            }
        }
    }

    return divisors
}

const addAmiable = (a, lookup, amiables) => {
    if ( a === lookup[lookup[a]] && a !== lookup[a] && amiables.indexOf(a) < 0){
        return true
    } 

    return false
}

const f = (n) => {
    let lookup = {}
    let amiables = []

    for(let i=0; i<n; i++){
        lookup[i] = divisors(i).reduce( (sum, value) => sum = sum + value, 0 )
    }

    for(let i=0; i<n; i++){
        if ( addAmiable(i, lookup, amiables) ){
            amiables.push( i )
            amiables.push( lookup[i] )
        }
    }    

    return amiables.reduce( (sum,value) => sum = sum + value, 0 )
}

module.exports = f