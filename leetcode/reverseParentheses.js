const reverseParentheses = (s) => {
    const stack = [];
    let current = [];

    for (const char of s) {
        if (char === ')') {
            while(stack[stack.length - 1] !== '(') {
                current.push(stack.pop());
            }
            stack.pop();
            stack.push(...current);
            current = [];
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};