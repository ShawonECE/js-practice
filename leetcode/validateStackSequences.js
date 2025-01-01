const validateStackSequences = (pushed, popped) => {
    let current = 0;
    const stack = [];

    for (const num of pushed) {
        if (num === popped[current]) {
            current++;
            while (stack.length && stack[stack.length - 1] === popped[current]) {
                stack.pop();
                current++;
            }
        } else {
            stack.push(num);
        }
    }

    // while (stack.length) {
    //     if (stack[stack.length - 1] === popped[current]) {
    //         stack.pop();
    //         current++;
    //     } else {
    //         return false;
    //     }
    // }

    return stack.length === 0;
};