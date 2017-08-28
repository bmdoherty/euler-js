
//What is the sum of the digits of the number 21000

const multiply = (a, b) => {
    let product = Array(1000)
    let i = 0
    let c = 0

    while(a.length){
        if(a.length){
            x = a.pop()
        }

        multiplication = (x * b) + c

        u = multiplication % 10
        c = Math.floor( multiplication / 10)

        product[product.length-1-i] = u

        i++
    }

    // final carry
    if(c){
        product[product.length-1-i] = c 
    }

    return product.filter( i => { 
        return i !== undefined
    })
}

const f = (n, power) => {
    let product = [1]

    for(let i=0; i<power; i++){
        product = multiply(product, n)
    }

    return product.reduce( (sum,value) => sum = sum + value)
}

module.exports = f;