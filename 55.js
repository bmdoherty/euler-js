"use strict"
console.time("timer")
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

// const isPalindome = (a) => {
//     let b = a.slice(0).reverse()
//     return a.every( (v,i) => v == b[i] )
// }

const isPalindome = (a) => {
    return a == parseInt(`${a}`.split('').reverse().join(''))
}

const reverse = (a) => {
    return parseInt(`${a}`.split('').reverse().join(''))
}

const isLychrel = (n) => {
    let i = 0
    let isLychrel = true
    //n = `${n}`.split('').map(Number)
    //n = add(n, n.slice(0).reverse()) 
    n = n + reverse(n)
    while( i < 50 && !isPalindome(n) ){
        //n = add(n, n.slice(0).reverse()) 
        n = n + reverse(n)
        i++
    }
    // console.log(i)    
    // console.log(n)
    if( isPalindome(n) ){
        isLychrel = false        
    }
    
    return isLychrel
}

const f = (n) => {
    let lychrelCount = 0

    for(let i=1; i<n; i++){
        if( isLychrel(i)){
            lychrelCount++ 
        }
    }

    return lychrelCount
}

module.exports = {f, isPalindome, isLychrel}
console.timeEnd("timer")