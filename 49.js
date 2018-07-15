"use strict"
console.time("timer")

const swap = (arr, a, b) => {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
}

const sieve = (n) => {
    let primes = new Set()
    let limit = Math.sqrt(n)

    for (let i = 2; i <= n; i++) {
        primes.add(i)
    }

    for (let i = 2; i < limit; i++) {
        if (primes.has(i)) {
            for (let j = i + i; j <= n; j = j + i) {
                primes.delete(j)
            }
        }
    }

    for (let i = 2; i < 999; i++) {
        primes.delete(i)
    }

    return primes
}

const primes = sieve(9999)

function permute(arr) {
    const processPermutation = (i) => {
        // add to out
        let p = parseInt(arr.join(''), 10)
        if (primes.has(p)) {
            out.add(p)
        }
    }

    const addPermutations = (arr, n) => {
        if (n == 1) {
            processPermutation(arr);
        } else {
            for (let i = 0; i < n - 1; i++) {
                let a = n % 2 ? 0 : i
                let b = n - 1

                addPermutations(arr, n - 1);
                swap(arr, a, b);
            }
            addPermutations(arr, n - 1);
        }
    }

    let out = new Set();
    // recursive heaps algorithm
    addPermutations(arr, arr.length);
    return out;
}

const unique = new Set()
const makeUnique = (v, i, a) => {
    let sorted = `${v}`.split('').sort((a, b) => a - b).join('')

    if (!unique.has(sorted)) {
        unique.add(sorted)
        return true
    }

    return false
}

const primePermutations = (v, i, a) => {
    return [...permute(`${v}`.split(''))].sort((a, b) => a - b)
}

const hasProgression = (v, i, a) => {
    for (let i = 0; i < v.length; i++) {
        let post1 = v[i]
        for (let j = i + 1; j < v.length; j++) {
            let post2 = v[j]
            let fence = post2 - post1
            let post3 = post2 + fence

            if (v.includes(post3)) {
                return `${post1}${post2}${post3}`
                console.log(`${post1}${post2}${post3}`)
            }
        }
    }
}

const f = () => {

    let candidates = [...primes] // start with primes
        .filter(makeUnique) // remove duplicates 1234, 4321
        .map(primePermutations) // work out prime perms
        .map(hasProgression) // see if it contains progression
        .filter(v => v != undefined) // remove those hat dont match criteria
        .filter(v => v != '148748178147') // dont want this one

    return candidates[0]

}

module.exports = f
console.timeEnd("timer")

