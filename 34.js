const factorial = (n) => {
    if(n < 0){
        return undefined
    }
    if(n == 1 || n == 0 ){
        return 1
    }
    return n * factorial(n-1)
}

const f = () => {
    let candidates = [...Array(50000).keys()]
    
    let factorialDigit = [...Array(10).keys()].map( i => factorial(i))
    let lookup = {}

    let sum = candidates
        .map( i => { 
            let arr = `${i}`.split('').sort()
            let index = arr.join('')
            let item = {
                'i': i,
                'arr': arr,
                'f': lookup[index] ? lookup[index] : false 
                }
            
                if( !item.f ){
                    item['f'] = item['arr']
                        .map( i => factorialDigit[i])
                        .reduce( (sum,value) => sum = sum + value)
                    
                    lookup[index] = item.f 
                }
                return item
            })
        .filter( i => i.i == i.f) // eq sum factorials
        .map( i => i.i)
        .filter( i => i > 2)      // remove 1,2
        .reduce( (s,v) => s = s + v, 0 )

    return sum
}

module.exports = f
