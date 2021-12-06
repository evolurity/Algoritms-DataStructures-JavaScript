class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(element) {
        const newNode = {value: element, next: null}
        if (!this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
}

const ll = new LinkedList()
ll.push('33')
ll.push('44')
ll.push('555')
console.log(ll);