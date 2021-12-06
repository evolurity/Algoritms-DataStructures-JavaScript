class Node {
    constructor(data, next, prev) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    put(data) {
        if (!this.head) {
            this.tail = new Node(data, null, null)
            this.head = this.tail
            this.length++
        } else {
            const node = new Node(data, null, this.tail)
            this.tail.next = node
            this.tail = node
            this.length++
        }
    }

    pick() {
        if (!this.head) {
            this.tail = null
            return null
        }
        const newHead = this.head.next
        const deletedNodeData = this.head.data
        this.head.data = null
        this.head = newHead
        this.length--
        return deletedNodeData
    }

    toArray() {
        const array = []
        let current = this.head
        while (current) {
            array.push(current.data)
            current = current.next
        }
        return array
    }
}

const queue = new Queue()
queue.put('1')
queue.put('2')
console.log(queue);
console.log(queue.length);
queue.put(3)
queue.put(4)
queue.put(5)
console.log(queue);
console.log(queue.length);
console.log(queue.pick());
console.log(queue.pick());
console.log(queue.pick());
console.log(queue.pick());
console.log(queue.pick());
console.log(queue.pick());
console.log(queue.toArray())
queue.put(3)
queue.put(4)
queue.put(5)
console.log(queue);
console.log(queue.length);
console.log(queue.toArray())