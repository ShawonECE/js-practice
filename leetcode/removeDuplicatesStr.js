const removeDuplicates = (s) => {
    const stack = [];
    let str = '';
    for (const char of s) {
        if (!stack.length) {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
    }
    for (const element of stack) {
        str = str + element;
    }
    return str;
};

const s = "azxxzy";
console.log(removeDuplicates(s));
