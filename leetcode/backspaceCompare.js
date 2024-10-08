const backspaceCompare = (s, t) => {
    const stack1 = [];
    const stack2 = [];
    const length1 = s.length;
    const length2 = t.length;

    for (let i = 0; i < length1; i++) {
        if (s[i] !== '#') {
            stack1.push(s[i]);
        } else {
            if (stack1.length) {
                stack1.pop();
            }
        }
    }

    for (let j = 0; j < length2; j++) {
        if (t[j] !== '#') {
            stack2.push(t[j]);
        } else {
            if (stack2.length) {
                stack2.pop();
            }
        }
    }
    return JSON.stringify(stack1) === JSON.stringify(stack2);
};

const s = "a#c", t = "b";
console.log(backspaceCompare(s, t));