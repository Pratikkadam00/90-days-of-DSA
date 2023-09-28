// A queue is a linear data structure that follows the First - In - First - Out(FIFO) principle,
// meaning that the first element added to the queue is the first one to be removed.
// Here's an example of implementing a queue in JavaScript:

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the back of the queue
    enqueue(item) {
        this.items.push(item);
    }

    // Remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Return the front element without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

// Example usage of the queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front()); // Output: 1
console.log(queue.dequeue());  // Output: 1
