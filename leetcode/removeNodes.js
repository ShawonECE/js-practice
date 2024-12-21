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

const removeNodes = (head) => {
    const values = [];
    const finals = [];
    let max = 0;
    
    while (head) {
        values.push(head.val);
        head = head.next;
    }

    while (values.length) {
        const current = values.pop();

        if (current >= max) {
            max = current;
            finals.push(current);
        }
    }

    const list = new SinglyLinkedList();

    for (let i = finals.length - 1; i >= 0; i--) {
        list.append(finals[i]);
    }

    return list.head;
};