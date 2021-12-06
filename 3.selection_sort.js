// Selection sort -> O(n^2)
const array = [4, 3, 2, 4, 5, 6, 7, 333, 56, 4, 54, 1, 545, 1, 6]

let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        const tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}
