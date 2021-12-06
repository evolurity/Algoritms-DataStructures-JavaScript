// quick sort -> O(log2n*n)

const array = [4, 3, 2, 4, 5, 6, 7, 333, 56, 4, 54, 1, 545, -8, 1, 6, 99, 44, 3, 11, 555, 333333]

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        if (pivotIndex === i) {
            continue
        } else if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]

}

console.log(quickSort(array));