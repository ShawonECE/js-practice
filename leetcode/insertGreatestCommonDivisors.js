class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const get_gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};


const insertGreatestCommonDivisors = (head) => {
    if(!head.next) {
        return head;
    }

    let first = head;
    let second = head.next;

    while(second) {
        let gcd = get_gcd(first.val, second.val);
        let newNode = new Node(gcd);
        first.next = newNode;
        newNode.next = second;

        first = second;
        second = second.next;
    }

    return head;
};