const decodeString = (s) => {
    const stack = [];

    for (const char of s) {
        if (char === ']') {
            const seq = [];
            while(stack[stack.length - 1] !== '[') {
                seq.push(stack.pop());
            }
            stack.pop();
            let reps = '';
            while(stack.length && stack[stack.length - 1].charCodeAt(0) >= 48 && stack[stack.length - 1].charCodeAt(0) <= 57) {
                reps = stack.pop() + reps;
            }
            seq.reverse();
            for (let i = 0; i < parseInt(reps); i++) {
                stack.push(...seq);
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};

const s = "2[abc]3[cd]ef";
console.log(decodeString(s));