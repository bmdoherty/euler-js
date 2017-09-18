"use strict"
console.time("timer")



const f = (n) => {
    let sum = 0
    let modulo = 10000000000

    for(let i=1; i<=n; i++){
        let t = i        
        for (let j=1; j<i; j++) {
            t = (t * i) % modulo;
        }

        sum = (sum + t) % modulo
    }



    return sum //.toString(10).split('').slice(-10).join('')
}

module.exports = f
console.timeEnd("timer")

