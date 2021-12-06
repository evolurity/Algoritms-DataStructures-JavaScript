class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data)
        if (this.tail) {
            this.tail.next = node
        }
        if (!this.head) {
            this.head = node
        }
        this.tail = node
    }

    prepend(data) {
        const node = new Node(data, this.head)
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    insertAfter(after, data) {
        const found = this.find(after)

        if (!found) {
            return
        }
        found.next = new Node(data, found.next)
    }

    find(data) {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current) {
            if (current.data === data) {
                return current
            }
            current = current.next
        }

    }

    remove(data) {
        if (!this.head || !this.find(data)) {
            return;
        }

        let current = this.head

        while (current) {
            if (!current.next.next && (current.next.data === data)) {
                current.next = null
                return;
            }
            if (current.data === data) {
                this.head = this.head.next
                return;
            }
            if (current.next.data === data) {
                current.next = current.next.next
                return;
            }
            current = current.next
        }
    }

    toArray() {
        let current = this.head
        const result = []
        while (current) {
            result.push(current.data)
            current = current.next
        }
        return result
    }
}

const list = new LinkedList()
