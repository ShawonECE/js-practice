const deleteDuplicates = (head) => {
    if (!head || !head.next) {
        return head;
    }
    let prev = null;
    let current = head;

    while (current) {
        let hasDuplicate = false;

        while (current.next && current.next.val === current.val) {
            hasDuplicate = true;
            current = current.next;
        }

        if (hasDuplicate) {
            if (prev) {
                prev.next = current.next;
            } else {
                head = current.next;
            }
        } else {
            prev = current;
        }

        current = current.next;
    }

    return head;
};