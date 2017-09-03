
const getMultipliers  = (arr) => {
    let s = []
    let digits = arr.slice()

    for(i=0; i<digits.length; i++){
        for(j=0; j<digits.length; j++){    
            if( `${digits[i]}`.indexOf(digits[j]) === -1){   
                for(k=0; k<digits.length; k++){           
                    if( `${digits[i]}${digits[j]}`.indexOf(digits[k]) === -1){
                            
                        s.push( parseInt(`${digits[i]}${digits[j]}${digits[k]}`))

                        for(l=i+1; l<digits.length; l++){
                            if( `${digits[i]}${digits[j]}${digits[k]}`.indexOf(digits[l]) === -1){
                                s.push( parseInt(`${digits[i]}${digits[j]}${digits[k]}${digits[l]}`))
                            }
                        }
                    }        
                }
            }
        }    
    }
    return s
}

const getMultiplicands = (digits) => {
    let s = digits.slice()

    for(i=0; i<digits.length; i++){
        for(j=0; j<digits.length; j++){
            if( `${digits[i]}`.indexOf(digits[j]) === -1){
                s.push( parseInt(`${digits[i]}${digits[j]}` ))                                  
            }  
        } 
    }

    return s
}

const findDigit = (num, used) => {
    let digitsInNum = (''+num).split('')
    let keep = true 
    for(let d=0; d<digitsInNum.length; d++){
        if(used.toString().indexOf(digitsInNum[d]) > -1){
            keep = false
        }
    }
    return keep
}

const compare = (a,b) => {
    return a.length==b.length && a.every((v,i)=> v === b[i])
}

const f = (digits) => {
    let sum = 0
    let products = {}
    let multiplicands = getMultiplicands(digits)
    let multipliers = getMultipliers(digits)

    for(let i=1; i<multiplicands.length; i++){
        multiplicand = multiplicands[i]
        
        posibleMultipliers = multipliers.filter( num => findDigit(num, multiplicand))

        for(let j=0; j<posibleMultipliers.length; j++){
            let multplier = posibleMultipliers[j]
            let unused = digits.filter( num => findDigit(num, multiplicand)).filter( num => findDigit(num, multplier))

            let product =  ((multiplicand * multplier)+'').split('').map(Number).sort()
            
            if( compare(unused, product) ){
                if(!products[product]){
                    sum = sum + (multiplicand * multplier)
                    console.log(`${multiplicand} * ${multplier} = ${multiplicand * multplier}`)
                    products[product] = product
                }
            }
        }
    }

    return sum
}

module.exports = f
