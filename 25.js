
// Returns true if a is smaller than b.
const isSmaller = (a,b) => {
    // Calculate lengths of both string
    let lenA = a.length 
    let lenB = b.length
 
    if (lenA < lenB){
       return true
    }

    if (lenB < lenA){
        return false
    }

    // same length
    for (let i=0; i<lenA; i++){
       if (a[i] < b[i]){
          return true;
       }
       else if (a[i] > b[i]){
            return false;
       }
    }      
 
    return false;
}

const add = (a, b) => {
    let calc
    let result = []
    let carry = 0

    let big = isSmaller(a, b) ? b : a
    let small = (a === big) ? b : a

    let diff = big.length - small.length

    let start = small.length-1
    for(let i=start; i>=0; i--){
        calc = small[i] + big[i+diff] + carry
        result.unshift( calc % 10)
        carry = Math.floor( calc / 10)
    }

    start = big.length-small.length-1
    for(let j=start; j>=0; j--){
        calc =  big[j] + carry
        result.unshift( calc % 10)
        carry = Math.floor( calc / 10)
        
    }         

    if(carry){
        result.unshift( carry )
    }  

    while(result[0] === 0){ 
        result.shift();       
    }

    return result
}

const f = (n) => {
    let i = 1
    let x = [1] 
    let a = []
    a[1] = [1]
    a[2] = [2]
    
    while( x.length < n ) {
        i++
        x = a[1]
        a[1] = a[2]
        a[2] = add(a[1], x)
    }

    return i
}

module.exports = f
