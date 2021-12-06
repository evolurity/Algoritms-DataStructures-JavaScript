function withoutRepeat(arr) {
    const result = []
    arr.sort()
    let current = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(current !== arr[i] && current!== arr[-2]) {
            result.push(current)
        }
        current = arr[i]
    }
    return result
}

console.log(withoutRepeat([3333, 4, 4, 4, 0, 1, 5]));