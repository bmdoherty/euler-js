
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const range = (min, max) => {
    let arr = []

    for(let i = min; i <= max; i++){
        arr.push(i)
    }
    return arr
}

const f = (min,max) => {
     
    sumOfSquares = range(min,max).map( n => n * n).reduce( (sum,value) => sum = sum + value )
    squareOfSums = Math.pow( range(min,max).reduce( (sum,value) => sum = sum + value) ,2)

    return squareOfSums - sumOfSquares
}

module.exports = f;