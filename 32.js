
// Evaluate the sum of all the amicable numbers under 10000.

const swap = (arr, a, b) => {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

const generate = (A, n, p = []) => {
    // base case
    if(n == 1 ){
        p.push(A.join(''))
    }
    else {

        for(let i=0; i<n-1; i++){
            generate( A, n - 1, p)

            if(n % 2 == 0){
                swap(A, i, (n-1))
            } else {
                swap(A, 0, (n-1)) 
            }
        }
        generate( A, (n-1), p)
    }

    return p
}

const f = (digits) => {
    let perms = generate(digits, digits.length)

    return perms
}

module.exports = f
