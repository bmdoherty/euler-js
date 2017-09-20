"use strict"
console.time("timer")

const f = () => {
    let lower = 23
    let upper = 100
    let count = 0
    let f = [1]

    for(let i=1; i<=100; i++){
        f[i] = i * f[i-1]
    }

    for(let n=lower; n<=upper; n++){
        for(let r=1; r<=n; r++){
            let C = f[n] / (f[r] * f[n-r])
            
            if( C > 1000000 ){
                count = count + 1
            }
        }
    }

    return count
}

module.exports = f
console.timeEnd("timer")