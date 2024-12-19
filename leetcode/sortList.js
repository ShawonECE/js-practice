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
const sortList = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let temp = head;
    const values = [];
    while (temp) {
        values.push(temp.val);
        temp = temp.next;
    }
    values.sort((a, b) => a - b);
    const list = new SinglyLinkedList();
    for (const val of values) {
        list.append(val);
    }
    return list.head;
};