// Find the sum of the digits in the number 100! 

const numToArray = (a) => {
    return (a+'').split('').map( i => parseInt(i))
}

// Returns true if a is smaller than b.
const isSmaller = (a,b) => {
    while(a[0] === 0){ 
        a.shift();       
    }

    while(b[0] === 0){ 
        b.shift();       
    }    

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
        //console.log(`small ${small[i]} ${big[i]} ${carry} == ${calc}`)
        result.unshift( calc % 10)
        carry = Math.floor( calc / 10)
    }

    start = big.length-small.length-1
    for(let j=start; j>=0; j--){
        calc =  big[j] + carry
        
        //console.log(`big ${big[j]} ${carry} == ${calc}`)
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

const subtract = (a, b) => {
    let calc
    let result = []
    let borrow = 0

    let big = isSmaller(a, b) ? b : a
    let small = (a === big) ? b : a

    let diff = big.length - small.length

    let start = small.length-1
    for(i=start; i>=0; i--){
        calc = big[i+diff] - small[i] - borrow
        //console.log(`small ${big[i]} ${small[i]} ${borrow} == ${calc}`)

        if(calc < 0){
            calc = calc+10
            borrow = 1
        } else {
            borrow = 0
        }
        //console.log(`small borrow ${borrow}`)
        result.unshift( calc % 10)
       
    }

    start = big.length - small.length - 1
    for(let j=start; j>=0; j--){
        calc =  big[j] - 0 - borrow
        //console.log(`big ${big[j]} 0 ${borrow} == ${calc}`)
        if(calc < 0){
            calc = calc+10
            borrow = 1
        } else {
            borrow = 0
        }   
        //console.log(`big borrow ${borrow}`)    
        result.unshift( calc % 10)
    }         

    if(borrow){
        calc =  0 - borrow
        //console.log(`final 0  ${borrow} == ${calc}`)
        result.unshift( calc)
    }  

    while(result[0] === 0){ 
        result.shift();       
    }

    return result
}

function multiply(a, b) {
    var partialProducts = [] 

    // For each digit of b
    for (var i=b.length-1; i>=0; i--) {
        let p
        // tens, hundreds
        let partialProduct = Array( (b.length - 1 - i) ).fill(0)        
        let carry = 0;

        // multiple by each digit of a
        for (let j=a.length-1; j >= 0; j--) {
            p = a[j] * b[i] + carry
            partialProduct.unshift( p % 10 )
            carry = Math.floor(p / 10); 
        }

        if( carry ){
            p = carry
            partialProduct.unshift(p % 10)
            carry = Math.floor(p / 10);             
        }

        partialProducts.push( partialProduct )
    }

    let product = [0]
    for(i = 0; i<partialProducts.length; i++){
        //console.log(partialProducts[i])
        product = add(product, partialProducts[i])
    }

    return product;
}

const factorial = (n) => {
    
    
    if( n.length === 1 && n[0] === 1){
        // console.log('terminate')
        // console.log(n)
        return [1]
    }

    let next = subtract(n, [1] )

    // console.log('do another')
    // console.log(n)
    // console.log(next)
    
    let fact = multiply(n, factorial( next ))
    // console.log(n)
    // console.log(fact)
    // console.log('=================')
    return  fact
}

const f = (n) => {
    
    n = numToArray(n)

    let x = factorial(n)
        .reduce( (sum, value) => sum = sum + value)

    return x
}

module.exports = {f, add, subtract, multiply};