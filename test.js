class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error("index not found")
            return undefined
        }

        if (index === 0) {
            return this.prepend(value)
        }
        if (index === this.length) {
            return this.append(value)
        }


        const leadingNode = this._traverseToIndex(index - 1)
        const holdingNode = leadingNode.next

        const newNode = new Node(value)

        leadingNode.next = newNode
        newNode.next = holdingNode

        this.length++
    }

    _traverseToIndex(index) {
        let count = 0
        let currentNode = this.head

        while (count !== index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode
    }

    remove(index) {

        if (index === 0) {
            const removedItem = this.head.next

            this.head = this.head.next

            if (this.length === 1) {
                this.tail = null
            }

            this.length--;
            return removedItem
        }

        const leadingNode = this._traverseToIndex(index - 1)
        const nodeToRemove = leadingNode.next

        leadingNode.next = nodeToRemove.next

        if (leadingNode.next === null) {
            this.tail = leadingNode
        }

        return nodeToRemove.value
    }

    print() {
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.append(50).append(60).append(70)

linkedList.prepend(30).prepend(20).prepend(10)

linkedList.insert(3, 40)

linkedList.print()

linkedList.remove(2)

console.log("------------")
linkedList.print()