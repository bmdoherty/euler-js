const doNiave = (n, d, shared) => {
    if(shared.length==1){
        n = n.filter( (v) => v!= shared[0])
        d = d.filter( (v) => v!= shared[0])
    }
    return n/d
}

const gcd = (a, b) => {
    return !b ? a : gcd(b, a % b);
}

const f = () => {
    let n= [...Array(100).keys()].filter(( i => i > 9));
    let d = n.slice(0)

    let nominator = 1
    let denominator = 1

    for(let i=0; i<n.length; i++){
        for(let j=i; j<d.length; j++){
            let nDigits = `${n[i]}`.split('')
            let dDigits = `${d[j]}`.split('')
            
            let sharedDigits = nDigits.filter( (e) => dDigits.indexOf(e) > -1)

            if( sharedDigits.length){
                let decimal = n[i]/d[j]
                let niave = doNiave(nDigits, dDigits, sharedDigits)
                let trivial = sharedDigits[0] == 0

                if (decimal == niave && !trivial && decimal < 1){
                    nominator = nominator * n[i]
                    denominator = denominator * d[j]
                }   
            }   
        }
    }

    return denominator / gcd(nominator, denominator)
}

module.exports = f
