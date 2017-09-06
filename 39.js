"use strict"

function solutions(p) {
    let solutions = []
    let limit = p/2

    for (let a=1; a<limit; a++){
        for (let b=a+1; b+a<p; b = a+1){
            let c = p-a-b
            if (a*a + b*b == c*c){
                solutions.push([a,b,c])
            }
        }
    }
    return solutions
}

const f = (limit) => {
    var max = 0
    var perimeter = 0
    for (let i=0; i<=1000; i++){
        if (solutions(i).length > max){
            max = solutions(i).length
            perimeter = i
        }
    }
    return perimeter
}

module.exports = f
