function countWays(n) {
    if (n < 0) {
        return 0
    }
    if (n === 0) {
        return 1
    }
    //O(3^n)
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3)
}

// O(n) + O(n) memory
let count = 0

function cashCountWays(n, cache = []) {
    count++
    if (n < 0) {
        count++
        return 0
    }
    if (!cache[n]) {
        if (n === 0) {
            count++
            cache[n] = 1
        } else {
            cache[n] = countWays(n - 1, cache) + countWays(n - 2, cache) + countWays(n - 3, cache)
            count++
        }
        return cache[n]
    } else {
        count++
        return cache[n]
    }
}

console.log(cashCountWays(12), count);
console.log(count)