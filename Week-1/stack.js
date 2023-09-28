// A stack is a linear data structure that follows the Last - In - First - Out(LIFO) principle,
// meaning that the last element added to the stack is the first one to be removed.
// Here's an example of implementing a stack in JavaScript:

class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the top of the stack
    push(item) {
        this.items.push(item);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage of the stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

