const set = new Set([1, 2, 3, 3, 3, 5, 6, 5])

set.add(10).add(20).add(30)
console.log(set.has(20))
//set.size

set.delete(1)

console.log(set.values())

// =======
