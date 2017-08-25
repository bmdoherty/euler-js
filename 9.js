
// Pythagorean triplet for which a + b + c = 1000. Find the product abc

const f = (n) => {
    
    for(let a=1; a<n; a++){
        for(let b=1; b<n; b++){
            let c = n - a - b
            if(a*a + b*b == c*c){
                return a*b*c
            }       
        }
    }

    return null
}

module.exports = f;