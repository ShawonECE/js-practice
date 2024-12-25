const pairSum = (head) => {
    const stack = [];
    let length = 0;
    let current = head;
    let maxSum = -Infinity;

    while (current) {
        length++;
        current = current.next;
    }

    current = head;
    let idx = 1;

    while (current) {
        if (idx <= length / 2) {
            stack.push(current.val);
        } else {
            maxSum = Math.max(maxSum, current.val + stack.pop());
        }
        idx++;
        current = current.next;
    }

    return maxSum;
};