const reorderList = (head) => {
    let current = head;
    let length = 0;

    while (current) {
        length++;
        current = current.next;
    }

    let middle;
    if (length % 2 === 0) {
        middle = length / 2;
    } else {
        middle = (length + 1) / 2;
    }

    let idx = 1;
    current = head;
    const odds = [];
    const evens = [];

    while (current) {
        if (idx <= middle) {
            odds.push(current.val);
        } else {
            evens.push(current.val);
        }

        idx++;
        current = current.next;
    }

    idx = 1;
    current = head;

    while (current) {
        if (idx % 2 === 0) {
            current.val = evens.pop();
        } else {
            current.val = odds.unshift();
        }

        idx++;
        current = current.next;
    }

    return head;
};