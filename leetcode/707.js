class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    get (index) {
        if (index < 0 || index >= this.length) {
            return -1;
        }

        if (index === this.length - 1) {
            return this.tail.val;
        }

        let currentIdx = 0;
        let currentNode = this.head;

        while(currentIdx <= index) {
            if (currentIdx === index) {
                return currentNode.val;
            }
            currentIdx++;
            currentNode = currentNode.next;
        }
    }

    addAtHead (value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    addAtTail (value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    addAtIndex (index, value) {
        if (index < 0 || index > this.length) {
            return;
        }

        if (index === 0) {
            this.addAtHead(value);
        } else if (index === this.length) {
            this.addAtTail(value);
        } else {
            let newNode = new Node(value);
            let previousNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;
            }
            let nextNode = previousNode.next;
            newNode.next = nextNode;
            newNode.prev = previousNode;
            previousNode.next = newNode;
            nextNode.prev = newNode;
            this.length++;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) {
            return;
        }

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        } else {
            let previousNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;                
            }
            removedNode = previousNode.next;
            let nextNode = removedNode.next;
            previousNode.next = nextNode;
            if (nextNode) {
                nextNode.prev = previousNode;
            } else {
                this.tail = previousNode;
            }
        }
        this.length--;
    }
}