/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined? null : next);
    }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    if (!head) {
        return null;
    }
    let previousNode = head;
    let currentNode = head.next;
    while (currentNode) {
        if (currentNode.val === val) {
            previousNode.next = currentNode.next;
            currentNode = currentNode.next;
        } else {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }
    return head;
}