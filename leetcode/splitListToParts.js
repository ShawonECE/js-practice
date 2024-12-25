const splitListToParts = (head, k) => {
    const splits = new Array(k).fill(null);
    let current = head;
    let length = 0;

    while(current) {
        length++;
        current = current.next;
    }

    let size = Math.floor(length / k);
    let extras = length % k;

    current = head;
    let previous = null;

    for (let i = 0; i < k; i++) {
        splits[i] = current;
        let currentSize = size + (extras > 0 ? 1 : 0);
        extras--;

        for (let j = 0; j < currentSize; j++) {
            previous = current;
            current = current.next;
        }

        if (previous) {
            previous.next = null;
        }
    }

    return splits;
};