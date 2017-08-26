
// What is the value of the first triangle number to have over five hundred divisors?

function* triangleMaker() {
    var index = 1;
    while(true){
        index++;
        yield [...Array(index).keys()].reduce( (sum, value) => sum = sum + value)
    }
}

const divisors = (n) => {
    let divisors = [];
    let end = Math.floor(Math.sqrt(n));

    for(let i = 1; i<end; i++){
        if ( n % i == 0){ 
            divisors.push(i)

            if (i * i != n)  // Don't include a square root twice
                divisors.push(n / i); 
                // if n % i === 0 then n / i is also divisor
                // 28 % 2 === 0, so 2 & 14
        }
    }

    return divisors.length
}

const f = (n) => {
    let gen = triangleMaker();
    let d = 0
    let t

    while (d<n){
        t = gen.next().value
        d = divisors(t)
    }

    return t
}

module.exports = f;