const hasCycle = (head) => {
    if (!head || !head.next) {
        return false;
    }
    let fast = head, slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};