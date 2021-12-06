function fibonachi(n) {
    let prev = 1
    let current = 1
    for (let i = 0; i < n - 2; i++) {
        const temp = current
        current = current + prev
        prev = temp
    }
    return current
}

console.log(fibonachi(1));
//1