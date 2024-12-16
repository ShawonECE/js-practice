function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const nextNonDuplicate = (node) => {
    while (node) {
        if (!node.next) {
            return null;
        }

        if (node.val === node.next.val) {
            node = node.next;
        } else {
            return node.next;
        }
    }
}

const deleteDuplicates = (head) => {
    if (!head) {
        return;
    }

    let temp = head;

    while (temp) {
        if (temp.next && temp.val === temp.next.val) {
            temp.next = nextNonDuplicate(temp);
        }
        temp = temp.next;
    }

    return head;
};