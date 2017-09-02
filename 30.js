
const f = (p) => {
    let numbers = []
    let limit = 999999

    for (let i = 2; i <= limit; i++) {
        let digits = i.toString().split('')
        let sum = 0

        digits.forEach( d => sum = sum + Math.pow(d, p))

        if(sum === i){
            numbers.push(i)
        }
    }

    return  numbers.reduce( (sum, value) => sum = sum + value)
}
 
module.exports = f
