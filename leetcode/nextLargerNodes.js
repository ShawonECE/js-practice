const nextLargerNodes = (head) => {
    const elements = [];

    while(head) {
        elements.push(head.val);
        head = head.next;
    }

    const stack = [];
    const result = [];

    for (let i = elements.length - 1; i >= 0; i--) {
        if (stack.length) {
            while (stack.length) {
                if (stack[stack.length - 1] > elements[i]) {
                    result[i] = stack[stack.length - 1];
                    break;
                } else {
                    stack.pop();
                }
            }
        }

        stack.push(elements[i]);
        if (!result[i] && result[i] !== 0) {
            result[i] = 0;
        }
    }

    return result;
};

const elements = [2,7,4,3,5];
console.log(nextLargerNodes(elements));