const array = [1, 2, 3, 4, 5];

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(value) {
        let newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
};

const arrayToList = (array) => {
    let list = new List();
    for (let element of array) {
        list.push(element);
    }
    return list;
};

const list = arrayToList(array);

const listToArray = (list) => {
    let currentNode = list.head;
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray[i] = currentNode.value;
        currentNode = currentNode.next;
    }
    return newArray;
};

// console.log(listToArray(list));

// console.log(list);

const prepend = (element, list) => {
    let currentNode = list.head;
    let newList = new List();
    newList.push(element);
    for (let i = 0; i < list.length; i++) {
        newList.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return newList;
};

//console.log(prepend(0, list));

const nth = (position, list) => {
    if (position >= 0 && position < list.length) {
        let currentNode = list.head;
        for (let i = 0; i < position; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    } else return undefined;
};

console.log(nth(3, list));