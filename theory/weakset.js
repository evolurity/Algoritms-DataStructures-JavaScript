// значения weakset только объекты, если какой-то объект вычищается сборщиком мусора,
// то он удаляется из weakset

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
]
const visits = new WeakSet()

visits.add(users[0]).add(users[1])

users[1] = null

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))


