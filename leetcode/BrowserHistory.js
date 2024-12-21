class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }
    append(value) {
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
    removeFrom(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            let previousNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;                
            }
            removedNode = previousNode.next;
            let nextNode = removedNode.next;
            previousNode.next = nextNode;
            if (nextNode) {
                nextNode.previous = previousNode;
            } else {
                this.tail = previousNode;
            }
        }
        this.length--;
        return removedNode.value;
    }
}

class BrowserHistory {
    constructor(homepage) {
        this.list = new DoublyLinkedList();
        this.list.append(homepage);
        this.current = this.list.head;
    }

    visit(url) {
        this.current.next = null;
        this.list.tail = this.current;
        this.list.append(url);
        this.current = this.list.tail;
    }

    back(steps) {
        for (let i = 0; i < steps && this.current.previous; i++) {
            this.current = this.current.previous;
        }

        return this.current.value;
    }

    forward(steps) {
        for (let i = 0; i < steps && this.current.next; i++) {
            this.current = this.current.next;
        }

        return this.current.value;
    }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit("google.com"); 
browserHistory.visit("facebook.com"); 
browserHistory.visit("youtube.com"); 

console.log(browserHistory.back(1));