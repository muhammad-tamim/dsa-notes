class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }

        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue()
queue.print() // []

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(8);
queue.print() // [ 5, 10, 8 ]

console.log(queue.dequeue());  // 5
queue.print() // [ 10, 8 ]

console.log(queue.peek()); // 10
console.log(queue.isEmpty()) // false
console.log(queue.size()); // 2