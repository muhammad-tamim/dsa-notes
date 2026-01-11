class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }

        return this.items[this.items.length - 1]
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

const stack = new Stack()
stack.print() // []

stack.push(5);
stack.push(10);
stack.push(8);
stack.print() // [ 5, 10, 8 ]

console.log(stack.pop());  // 8
stack.print() // [ 5, 10 ]

console.log(stack.peek()); // 10
console.log(stack.isEmpty()) // false
console.log(stack.size()); // 2