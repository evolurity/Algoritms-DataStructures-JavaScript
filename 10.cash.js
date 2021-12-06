function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('закэшировано')
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        return result
    }
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

console.log(factorial(5));

const cashedFact = cashFunction(factorial)
console.log(cashedFact(5));
console.log(cashedFact(5));