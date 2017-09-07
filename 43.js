"use strict"
console.time("timer")

const swap = (arr, a, b) => {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

const isDivisable = (a, b, c, mod) => {
    return ((a*100) + (b*10) + c) % mod == 0
}

function permute(arr) {
    const processPermutation = (i) => {
        if( arr[0] != 0
            && (arr[3] % 2  == 0)
            && isDivisable(arr[2], arr[3], arr[4], 3) 
            && isDivisable(arr[3], arr[4], arr[5], 5)
            && isDivisable(arr[4], arr[5], arr[6], 7) 
            && isDivisable(arr[5], arr[6], arr[7], 11)
            && isDivisable(arr[6], arr[7], arr[8], 13)
            && isDivisable(arr[7], arr[8], arr[9], 17) ){
                // add to out
                out.push(parseInt(arr.join(''), 10))        
        }
    }

    const addPermutations = (arr, n) => {
        if (n == 1) {
            processPermutation(arr);
        } else {
            // do
            for (let i = 0; i < n - 1; i++) {
                let a = n % 2 ? 0 : i
                let b = n - 1

                addPermutations(arr, n - 1);          
                swap(arr, a, b);
            }
            addPermutations(arr, n - 1);
        }
    }

    let out = [];
    // recursive heaps algorithm
    addPermutations(arr, arr.length);
    return out;
}

const f = (a) => {

    let p = permute(a)

    return p.reduce( (s,v) => s= s + v)
}

module.exports = f
console.timeEnd("timer")