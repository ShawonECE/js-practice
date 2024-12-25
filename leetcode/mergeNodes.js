class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
    }
}

const mergeNodes = (head) => {
    let current = head.next;
    let list = new SinglyLinkedList();
    let sum = 0;

    while(current) {
        if (current.val === 0) {
            list.append(sum);
            sum = 0;
        } else {
            sum += current.val;
        }

        current = current.next;
    }

    return list.head;
};