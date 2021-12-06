// linear search -> 0(n)
const array = [4, 3, 2, 4, 5, 6, 7, 333, 56, 4, 54, 1, 545, 1, 6]
let count = 0

function linearSearch(item, array) {
    for (let indexPosition = 0; indexPosition < array.length; indexPosition++) {
        count += 1
        if (item === array[indexPosition]) {
            return `Element ${item}: position ${indexPosition}`
        }
    }
    return null
}

console.log(linearSearch(4333, array), count);