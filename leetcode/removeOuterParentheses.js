const removeOuterParentheses = (s) => {
    let stack = [];
    let str = '';
    for (const idx in s) {
        if (s[idx] === '(') {
            if (stack.length !== 0) {
                str = str + '(';
            }
            stack.push('(');
        } else {
            stack.pop();
            if (stack.length !== 0) {
                str = str + ')';
            }
        }
    }
    return str;
};

const s = "(()())(())(()(()))";
console.log(removeOuterParentheses(s));
