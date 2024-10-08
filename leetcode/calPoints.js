const calPoints = (operations) => {
    const stack = [];
    for (let idx = 0; idx < operations.length ; idx++) {
        if (Number.isInteger(parseInt(operations[idx]))) {
            stack.push(parseInt(operations[idx]));
        } else if (operations[idx] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length -2]);
        } else if (operations[idx] === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } else {
            stack.pop();
        }
    }
    return stack.reduce((a, b) => a + b, 0);
};

const ops = ["1","C"];
console.log(calPoints(ops));