const diagonal = (n) => {
    if(n % 2 === 0){
        throw 'Invalid n' 
    }
    // base condition
    if(n==1){
        return 1
    }

    // tr = Math.pow(n,2)   top right
    // tl = tr - (n) + 1    top left
    // bl = tr - (2*n) + 2  bottom left
    // br = tr - (3*n) + 3  bottom right

    return (4*Math.pow(n,2)) -(6*n) + (6) + diagonal(n-2)
}

const f = (n) => {

    return diagonal(n)
}

module.exports = f
