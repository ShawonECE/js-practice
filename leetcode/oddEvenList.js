const oddEvenList = (head) => {
    if (!head || !head.next || !head.next.next) {
        return head;
    }

    let i = 3;
    let current = head.next.next;
    // let firstOdd = head;
    let firstEven = head.next;
    let odd = head;
    let even = head.next;

    while(current) {
        if (i % 2 === 0) {
            even.next = current;
            even = current;
        } else {
            odd.next = current;
            odd = current;
        }

        current = current.next;
        i++;
    }

    odd.next = firstEven;
    even.next = null

    return head;
};