let obj = {name: 'weakmap'}


// у WeakMap ключами могут быть только объекты
const map = new WeakMap([
    [obj, 'obj data']
])

// get set delete has // no size

// =====

const cash = new WeakMap()

function cashUser(user) {
    if (!cash.has(user)) {
        cash.set(user, Date.now())
    }
    return cash.get(user)
}

let lena = {name: 'Lena'};
let alex = {name: 'Alex'}

cashUser(lena)
cashUser(alex)

lena = null

console.log(cash.has(lena));
console.log(cash.has(alex));