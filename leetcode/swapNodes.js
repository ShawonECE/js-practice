const swapNodes = (head, k) => {
    let temp = head;
    let length = 0;

    while (temp) {
        length++;
        temp = temp.next;
    }

    let first = null;
    let last = null;

    temp = head;

    for (let i = 1; i <= length; i++) {
        if (i === k) {
            first = temp;
        }

        if (i === length - k + 1) {
            last = temp;
        }

        temp = temp.next;
    }

    [first.val, last.val] = [last.val, first.val];

    return head;
};