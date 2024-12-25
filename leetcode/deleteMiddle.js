const deleteMiddle = (head) => {
    if (!head.next) {
        return null;
    }
    let current = head;
    let length = 0;

    while (current) {
        current = current.next;
        length++;
    }

    let middleIdx = Math.floor(length / 2);
    let i = 0;
    let previous = null;
    current = head;

    while (i <= middleIdx) {
        if (i === middleIdx) {
            previous.next = current.next;
            break;
        }
        previous = current;
        current = current.next;
        i++;
    }

    return head;
};