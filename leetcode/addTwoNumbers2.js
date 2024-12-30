class Node {
    constructor(val) {
        this.val = val;
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

    prepend(value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty list");
        } else {
            let currentNode = this.head;
            let listValues = '';
            while (currentNode) {
                listValues += `${currentNode.val}  `;
                currentNode = currentNode.next;
            }
            console.log(listValues);
        }
    }
}

const addTwoNumbers = (l1, l2) => {
    const digits1 = [];
    const digits2 = [];
    let current = l1;

    while(current) {
        digits1.push(current.val);
        current = current.next;
    }

    current = l2;

    while(current) {
        digits2.push(current.val);
        current = current.next;
    }

    const list = new SinglyLinkedList();
    let carry = 0;

    while(digits1.length || digits2.length) {
        const value1 = digits1.length ? digits1.pop() : 0;
        const value2 = digits2.length ? digits2.pop() : 0;;
        let sum = value1 + value2 + carry;
        carry = 0;

        if (sum > 9) {
            carry = 1;
            list.prepend(sum - 10);
        } else {
            list.prepend(sum);
        }
    }

    if (carry) {
        list.prepend(carry);
    }

    return list.head;
};