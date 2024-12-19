import { Node, SinglyLinkedList, arrayToList } from './utils/arrayToList.js';
import { listPrint } from './utils/listPrint.js';
const rotateRight = (head, k) => {
    if (!head || !head.next || k === 0) {
        return head;
    }
    let length = 0;
    let temp = head;

    while (temp) {
        length++;
        temp.idx = length;
        temp = temp.next;
    }

    if (k % length === 0) {
        return head;
    }

    k = k % length;

    let newTail = null;
    let newHead = null;
    let tail = null;

    temp = head;
    while (temp) {
        console.log(length, temp.idx);
        if (temp.idx === length - k) {
            newTail = temp;
        }
        if (temp.idx === length - k + 1) {
            newHead = temp;
        }
        if (temp.idx === length) {
            tail = temp;
        }
        
        temp = temp.next;
    }

    newTail.next = null;
    tail.next = head;

    return newHead;
};

const arr = [0,1,2], k = 0;
const list = arrayToList(arr);
const head = rotateRight(list.head, k);
// console.log(head);
listPrint(head);
// list.print();