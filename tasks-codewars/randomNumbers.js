const randomNumbers = () => Math.floor(Math.random() * 100)

function generate() {
    const result = []
    for (let i = 0; i < 10000000; i++) {
        result.push(randomNumbers())
    }
    return result
}

function count(array) {
    return array.filter(num => num === 10).length

}

console.log(count(generate()));