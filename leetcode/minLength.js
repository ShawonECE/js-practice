const minLength = (s) => {
    const stack = [];
    const length = s.length;
    let i = 0;
    while (i < length) {
        if (s[i] === "A" && s[i + 1] === "B" || s[i] === "C" && s[i + 1] === "D") {
            i = i + 2;
        } else {
            if (stack.length) {
                if (s[i] === "B" && stack[stack.length - 1] === "A" || s[i] === "D" && stack[stack.length - 1] === "C") {
                    stack.pop();
                } else {
                    stack.push(s[i]);
                }
            } else {
                stack.push(s[i]);
            }
            i++;
        }
    }
    return stack.length;
};

const s = "ACBBD";
console.log(minLength(s));
