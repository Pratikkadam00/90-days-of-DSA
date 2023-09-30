class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    deleteNode(key) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current !== null && current.data !== key) {
            prev = current;
            current = current.next;
        }
        if (current === null) {
            return;
        }
        prev.next = current.next;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Example usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);

console.log("Original List:");
myList.printList();

myList.deleteNode(1);

console.log("List after deleting node with key 1:");
myList.printList();
