import { Node, SinglyLinkedList, arrayToList } from './utils/arrayToList.js';
const swapPairs = (head) => {
    let temp = head;

    while (temp && temp.next) {
        [temp.val, temp.next.val] = [temp.next.val, temp.val];

        temp = temp.next.next;
    }

    return head;
};

console.log(Node, SinglyLinkedList, arrayToList);