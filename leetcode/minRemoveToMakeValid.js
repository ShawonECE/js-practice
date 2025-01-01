const minRemoveToMakeValid = (s) => {
    const stack = [];
    const parentheses = [];

    for (const char of s) {
        if (char === '(') {
            parentheses.push(char);
            stack.push(char);
        } else if (char === ')') {
            if (parentheses.length) {
                parentheses.pop();
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }

    for (let i = stack.length - 1; i >= 0 && parentheses.length; i--) {
        if (stack[i] === '(') {
            stack.splice(i, 1);
            parentheses.pop();
        }
    }

    return stack.join('');
};