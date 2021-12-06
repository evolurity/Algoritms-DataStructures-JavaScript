const arr = [220, 1, 0, 20, 3, 3, 3, 4, 5, 1, 6, 7, 7, 1, 1, 1, 1]

arr.sort((a, b) => a - b)

function count(array) {
    const mapCount = {}
    while (array.length > 0) {
        const mid = Math.floor(array.length / 2)
        let currentMid = mid
        mapCount[array[mid]] = 1
        let left = 0
        let right = 0
        while (array[currentMid - 1] === array[mid]) {
            mapCount[array[mid]] += 1
            currentMid--
            left++
        }
        currentMid = mid
        while (array[currentMid + 1] === array[mid]) {
            mapCount[array[mid]] += 1
            currentMid++
            right++
        }
        let countDelete = left + right + 1
        array.splice(mid - left, countDelete)
    }
    return mapCount
}

console.log(arr);
console.log(count(arr));
console.log(arr);