const isValid = (s) => {
    const stack = [];

    for (const char of s) {
        if (char === 'c') {
            if (stack.length === 0 || stack.pop() !== 'b') return false;
            if (stack.length === 0 || stack.pop() !== 'a') return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};