
//What is the sum of the digits of the number 21000

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



const f = (n, power) => {
    let product = [1]

    for(let i=0; i<power; i++){
        product = multiply(product, [n])
    }

    return product.reduce( (sum,value) => sum = sum + value)
}

module.exports = {f, multiply};