//binary search - O(log2n)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0

function binarySearch(item, array) {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1

    while (found === false && end >= start) {
        count++
        middle = Math.floor((start + end) / 2)
        if (item === array[middle]) {
            position = middle
            found = true
        } else if (item < array[middle]) {
            end = middle
        } else {
            start = middle
        }
    }
    return position
}

function recursiveBinarySearch(item, array, start = 0, end = array.length) {
    let middle = Math.floor((start + end) / 2)
    let found = false
    let position = -1
    if (item === array[middle]) {
        position = middle
        found = true
    } else if (item < array[middle]) {
        end = middle
    } else {
        start = middle
    }
    if (found === true || end <= start) {
        return position
    }
    return recursiveBinarySearch.call(null, item, array, start, end)
}

console.log(recursiveBinarySearch(9, array), count);
