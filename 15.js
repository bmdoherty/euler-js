// How many such routes are there through a 20×20 grid?

const pascal = (n) => {
    let line = [1]

    for(let k=0; k<n; k++){
        let i = line[k] * (n-k) / (k+1)
        line.push( i )        
    }

    // centre
    return line[ Math.floor(line.length / 2) ]
}

const f = (n) => {

    return pascal(n*2)
}

module.exports = f;
