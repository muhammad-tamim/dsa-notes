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

function bracketChecker(str) {
    const stack = new Stack()

    const bracketsObj = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i]

        if (bracket === '(' || bracket === '[' || bracket === '{') {
            stack.push(bracket)
        }
        else if (bracket === ')' || bracket === ']' || bracket === '}') {
            if (stack.isEmpty() || stack.pop() !== bracketsObj[bracket]) {
                return false
            }
        }
    }
    return stack.isEmpty()
}


console.log(bracketChecker("()[]{}")) // true
console.log(bracketChecker("([{}])")) // true
console.log(bracketChecker("(]")) // false
console.log(bracketChecker("(()")) // false