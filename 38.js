"use strict"

const compare = (a,b) => {
    a = a.split('').map(Number).sort( (a,b) => a-b )

    return a.length==b.length && a.every((v,i)=> v === b[i])
}

const f = (digits) => {
    let maxNum = digits.sort( (a,b) => b-a).join('')
    let minNum = digits.sort( (a,b) => a-b).join('')
    let max = 0

    for(let i=1; i<=9999; i++ ){
        let products = []

        for(let j=1;j<=9;j++){
            let product = `${i*j}`
            products.push(product)
            
            let concat = products.reduce( (s,v) => s + v, '')

            // simple filter on the string length
            if( concat.length >= digits.length ){
                let num = parseInt(concat)

                // simple filter on the number
                if( maxNum >= num && num >= minNum){
                    // check if pandigital
                    if(compare(concat,digits) && num > max){
                        max = num
                    }
                }
                // next one will be too big
                break;
            }          
        }
    }
    return max
}

module.exports = f
