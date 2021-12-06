//bubble sort -> O(n^2)
const array = [4, 3, 2, 4, 5, 6, 7, 333, 56, 4, 54, 1, 545, 1, 6]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            count++
            if (array[i] < array[j]) {
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

console.log(bubbleSort(array), count, array.length);