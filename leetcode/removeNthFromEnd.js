const removeNthFromEnd = (head, n) => {
    let dummy = {next: head};
    let slow = dummy, fast = dummy;

    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
};