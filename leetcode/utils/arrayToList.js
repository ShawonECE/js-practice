export class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

export class SinglyLinkedList {
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

export const arrayToList = (arr) => {
    const list = new SinglyLinkedList();
    for (const element of arr) {
        list.append(element);
    }
    return list;
};