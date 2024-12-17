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
    const list = new SinglyLinkedList();
    let carry = 0;

    while (l1 || l2) {
        const value1 = l1 ? l1.val : 0;
        const value2 = l2 ? l2.val : 0;
        let sum = value1 + value2 + carry;
        carry = 0;

        if (sum > 9) {
            carry = 1;
            list.append(sum - 10);
            console.log(sum - 10);
        } else {
            list.append(sum);
            console.log(sum);
        }

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry) {
        list.append(carry);
    }

    return list;
};

const l1 = new SinglyLinkedList();
l1.append(2);
l1.append(4);
l1.append(3);

const l2 = new SinglyLinkedList();
l2.append(5);
l2.append(6);
l2.append(4);

const sum = addTwoNumbers(l1.head, l2.head);
sum.print();