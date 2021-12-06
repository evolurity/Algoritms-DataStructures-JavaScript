const obj = {
    name: 'Yan',
    age: 20,
    job: 'middle js'
}

const entries = [
    ['name', 'Yan'],
    ['age', 20],
    ['job', 'middle js']
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));
// выполняют обратные действия

const map = new Map(entries);
// ключем может быть что угодно, а не только строка как у объекта
map
    .set(obj, 'value of obj')
    .set(NaN, 'Nan nn')
console.log(map)

// map.delete('job') // delete
// map.has(key) // проверка на наличие ключа
// map.size
// map,clear()

// for (let entry of map.entries()) {
//     console.log(entry)
// }

// for(let [key, value] of map){
//     console.log(key, value)
// }
//
// for(let val of map.values()) {
//     console.log(val)
// }

// map.forEach((value,key, m) => {
//     console.log(value, key)
// })

//==============

// const arr = [...map];
// const arr2 = Array.from(map);
//
// const mapObj = Object.fromEntries(map.entries())

//===============

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
]

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))

function lastVisit(user) {
    return visits.get(user)
}