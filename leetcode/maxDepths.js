const maxDepth = (s) => {
    const stack = [];
    let depth = 0;
    for (const char of s) {
        if (char === '(') {
            stack.push(char);
            if (depth < stack.length) {
                depth = stack.length;
            }
        }

        if (char === ')') {
            stack.pop();
        }
    }
    return depth;
};

const s = "()(())((()()))";
console.log(maxDepth(s));
