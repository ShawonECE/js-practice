class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const doubleIt = (head) => {
    let carry = 0;

    const iterate = (node) => {
        if (!node) {
            return;
        }

        iterate(node.next);

        let newVal = (node.val * 2) + carry;
        carry = 0;

        if (newVal > 9) {
            carry = 1;
            node.val = newVal - 10; 
        } else {
            node.val = newVal;
        }
    };

    iterate(head);

    if (carry) {
        const newNode = new Node(carry);
        newNode.next = head;
        return newNode;
    }
    
    return head;
};