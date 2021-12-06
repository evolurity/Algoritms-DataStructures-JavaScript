class LRUCashe {
    constructor(capacity) {
        this.capacity = capacity
        this.q = []
        this.m = {}
    }

    get(key) {
        if (this.m[key]) {
            const value = this.m[key].value
            this.put(key, value)
            return value
        }
        return -1
    }

    put(key, value) {
        if (this.m[key]) {
            this.q.splice(this.q.findIndex(node => node === this.m[key]), 1)
            this.m[key] = null
        }
        this.q.push({key, value})
        this.m[key] = this.q[this.q.length - 1]
        if (this.q.length > this.capacity) {
            this.m[this.q.shift().key] = null
        }
    }
}

const cash = new LRUCashe(3);
cash.put(2, 1)
cash.put(1, 2)
cash.put(5, 44)
cash.put(0, 1)
cash.put(7, 3)
cash.put(5, 3)
cash.get(5)
cash.get(7)
console.log(cash.q);

// LRU cash 2 версия: со связным списком вместо массива, чтобы за O(1) вставлять
// и получать элементы, а не за линейную сложность
// со splice и find по массиву


class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = this.tail = null
    }

    push(node) {
        if (!this.tail) {
            this.tail = this.head = node
        }
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
    }

    shift() {
        const result = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        return result
    }

    splice(node) {
        let currentNode = this.head
        if (!node.prev && !node.next) {
            this.head = this.tail = null
        } else if (!node.next) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        } else if (!node.prev) {
            this.head = this.head.next
            this.head.prev = null
        } else {
            const prev = node.prev
            const next = node.next
            prev.next = next
            next.prev = prev
            node.next = node.prev = null
        }
        this.length--
    }
}