const modifiedList = (nums, head) => {
    numsSet = new Set(nums);
    let previous = null;
    let current = head;

    while(current) {
        if (numsSet.has(current.val)) {
            if (previous) {
                previous.next = current.next;
                current = current.next;
            } else {
                current = current.next;
                head = current;
            }
        } else {
            previous = current;
            current = current.next;
        }
    }

    return head;
};