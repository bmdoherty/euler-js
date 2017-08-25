// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = number => {
    return number == (number + '').split('').reverse().join('')
}

const f = (number) => {
    let max = Math.pow(10,number)
    let min = Math.pow(10,number - 1)
    let largest = 0;

    for(let i = max; i >= min; i--){
        for(let j = max; j >= min; j--){
            if( isPalindrome( i * j) && (i * j) > largest ){
                largest = i * j
            }
        }
    }

    return largest
}


module.exports = f;