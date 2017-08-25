// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


// Using Euclid's algorithm
// A much more efficient method is the Euclidean algorithm, 
// which uses a division algorithm such as long division in combination with the observation that the gcd of 
// two numbers also divides their difference. 

// To compute gcd(48,18), 
// divide 48 by 18 to get a quotient of 2 and a remainder of 12. 
// Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. 
// Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd. 
// Note that we ignored the quotient in each step except to notice when the remainder reached 0, 
// signalling that we had arrived at the answer. 
const gcd = (a, b) => {
    return !b ? a : gcd(b, a % b);
}

// https://en.wikipedia.org/wiki/Least_common_multiple
const lcm = (a, b) =>  {
    return (a * b) / gcd(a, b);   
}

const range = (min, max) => {
    let arr = []

    for(let i = min; i <= max; i++){
        arr.push(i)
    }
    return arr
}

const f = (min, max) => {
    let multiple = min;
     
    range(min,max).forEach( (n) => {
            multiple = lcm(multiple, n);;
    })
    
    return multiple
}

module.exports = f;