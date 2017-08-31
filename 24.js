
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

const f = (n) => {
    let s = [0,1,2,3,4,5,6,7,8,9]
    let perms = generate(s, s.length).sort()

    return perms[n-1]
}

module.exports = f
