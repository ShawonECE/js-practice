const minAddToMakeValid = (s) => {
    let moves = 0;
    const stack = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length) {
                stack.pop();
            } else {
                moves++;
            }
        }
    }

    return stack.length + moves;
};

const s = "(((";
console.log(minAddToMakeValid(s));