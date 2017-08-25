//   The prime factors of 13195 are 5, 7, 13 and 29.  
//   What is the largest prime factor of the number 600851475143 ?

const isPrime = number => {
    let s = Math.sqrt(number)

    for (let i = 2; i <= s; i++){
        if(number % i === 0){
            return false;
        }
    }
    return number != 1
}

const isFactor = (i, number) => {
    return number % i === 0
}

const f = (number) => {
    let s = Math.sqrt(number)
    let primefactors = []

    for (let i = 2; i <= s; i++){
        if( isPrime(i) && isFactor(i, number) ){
            primefactors.push(i)
        }
    }
    
    return Math.max.apply(null, primefactors)
}

module.exports = f;