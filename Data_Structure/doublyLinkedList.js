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
    prepend(value) {
        let newNode = new Node(value);

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
    insert(value, index) {
        if (index < 0 || index > this.length) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length) {
            this.append(value);
        } else {
            let newNode = new Node(value);
            let previousNode = this.head;
            for (let i = 0; i < index - 1; i++) {
                previousNode = previousNode.next;
            }
            let nextNode = previousNode.next;
            newNode.next = nextNode;
            newNode.previous = previousNode;
            previousNode.next = newNode;
            nextNode.previous = newNode;
            this.length++;
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.length) {
            return null;
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
                nextNode.previous = previousNode;
            } else {
                this.tail = previousNode;
            }
            // if (index === this.length - 1) {
            //     this.tail = previousNode;
            // }
        }
        this.length--;
        return removedNode.value;
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (value === this.head.value) {
            return this.removeFrom(0);
        } else if (value === this.tail.value) {
            return this.removeFrom(this.length - 1);
        } else {
            let currentNode = this.head.next;
            for (let i = 1; i < this.length - 1; i++) {
                if (currentNode.value === value) {
                    return this.removeFrom(i);
                }
                currentNode = currentNode.next;
            }
            return null;
        }
    }
    removeEveryValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
            if (this.head) {
                this.head.previous = null;
            }
            this.length--;
        }
        if (this.isEmpty()) {
            this.tail = null;
            return;
        }
        let currentNode = this.head.next;
        let previousNode, nextNode;
        //let previousNode = this.head;
        //let nextNode = currentNode.next;
        while (currentNode) {
            previousNode = currentNode.previous;
            nextNode = currentNode.next;
            if (currentNode.value === value) {
                previousNode.next = nextNode;
                if (nextNode) {
                    nextNode.previous = previousNode;
                } else {
                    this.tail = previousNode;
                }
                // if (currentNode === this.tail) {
                //     this.tail = previousNode;
                // }
                //currentNode = currentNode.next;
                this.length--;
            }
            currentNode = currentNode.next;
        }
    }
    search(value) {
        if (this.isEmpty()) {
            return -1;
        }

        let currentNode = this.head;
            for (let i = 0; i < this.length; i++) {
                if (currentNode.value === value) {
                    return i;
                }
                currentNode = currentNode.next;
            }
        return -1;
    }
    reverse() {
        let currentNode = this.head;
        this.tail = this.head;
        let previousNode, nextNode;
        while (currentNode) {
            previousNode = currentNode.previous;
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            currentNode.previous = nextNode;
            currentNode = nextNode;
        }
        this.head = previousNode.previous;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Empty list");
        } else {
            let currentNode = this.head;
            let listValues = '';
            while (currentNode) {
                listValues += `${currentNode.value}  `;
                currentNode = currentNode.next;
            }
            console.log(listValues);
        }
    }
}

const list = new DoublyLinkedList();
list.append(5);
list.append(5);
list.append(0);
list.append(12);
list.print();
console.log(list);
list.reverse();
console.log(list);
list.print();