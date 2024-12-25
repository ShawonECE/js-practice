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

const arrayToList = (arr) => {
    const list = new SinglyLinkedList();
    for (const element of arr) {
        list.append(element);
    }
    return list;
};

const nodesBetweenCriticalPoints = (head) => {
    let previous = null;
    let current = head;
    const positions = [];
    let i = 0;

    while(current) {
        let next = current.next;

        if (previous && next && ((current.val > next.val && current.val > previous.val) || (current.val < next.val && current.val < previous.val))) {
            positions.push(i);
        }

        i++;
        previous = current;
        current = next;
    }

    if (positions.length < 2) {
        return [-1, -1];
    }

    let maxDistance = positions[positions.length - 1] - positions[0];
    let minDistance = Infinity;

    i = 0;
    let j = 1;

    while(j < positions.length) {
        minDistance = Math.min(minDistance, positions[j] - positions[i]);

        i++;
        j++;
    }

    return [minDistance, maxDistance];
};

const array = [5,3,1,2,5,1,2];
const list = arrayToList(array);
console.log(nodesBetweenCriticalPoints(list.head));