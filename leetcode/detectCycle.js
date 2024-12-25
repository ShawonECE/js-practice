const detectCycle = (head) => {
    if (!head || !head.next) {
        return null;
    }
    let fast = head, slow = head;
    let hasCycle = false;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;
            hasCycle = true;
            break;
        }
    }

    if (hasCycle) {
        while(slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    } else {
        return null;
    }
};