const scoreOfParentheses = (s) => {
    const stack = [];
    for (const char of s) {
        if (char === '(') {
            stack.push(0);
        } else {
            if (stack[stack.length - 1] === 0) {
                stack[stack.length - 1] = 1;
            } else {
                let val = 0;
                while(stack[stack.length - 1] !== 0) {
                    val += stack[stack.length - 1];
                    stack.pop();
                }
                stack[stack.length - 1] = 2*val;
            }
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};