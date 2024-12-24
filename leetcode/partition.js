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
    append(val) {
        let newNode = new Node(val);

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
                listValues += `${currentNode.value}  `;
                currentNode = currentNode.next;
            }
            console.log(listValues);
        }
    }
}

const partition = (head, x) => {
    if (!head) {
        return head;
    }
    const list1 = new SinglyLinkedList();
    const list2 = new SinglyLinkedList();

    while (head) {
        if (head.val < x) {
            list1.append(head.val);
        } else {
            list2.append(head.val);
        }
        head = head.next;
    }

    if (list1.head && list2.head) {
        list1.tail.next = list2.head;
        return list1.head;
    } else if (!list1.head && list2.head) {
        return list2.head;
    } else if (list1.head && !list2.head) {
        return list1.head;
    } else {
        return null;
    }
};