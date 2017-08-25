// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23. 
// Find the sum of all the multiples of 3 or 5 below 1000.

const f = (number) => {
    sum = [...Array(number).keys()]
        .filter( i => i % 3 === 0 || i % 5 === 0)
        .reduce( (sum, value) => (sum + value))
    
    return sum
    //return 23;
}

module.exports = f;