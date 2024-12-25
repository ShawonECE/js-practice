const deleteNode = (node) => {
    while(node && node.next) {
        node.val = node.next.val;

        if (!node.next.next) {
            node.next = null;
        }

        node = node.next;
    }
};