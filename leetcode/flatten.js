const findTail = (head) => {
    while(head && head.next) {
        head = head.next;
    }

    return head;
};

const flatten = (head) => {
    if (!head) {
        return head;
    }

    let current = head;
    while(current) {
        if (current.child) {
            let nextNode = current.next;
            let childTail = findTail(current.child);
            current.next = current.child;
            current.child.prev = current;

            if (nextNode) {
                childTail.next = nextNode;
                nextNode.prev = childTail;
            }

            current.child = null;
        }

        current = current.next;
    }

    return head;
};