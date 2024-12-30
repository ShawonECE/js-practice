const minSwaps = (s) => {
    const stack = [];
    let imbalance = 0;

    for (const bracket of s) {
        if (bracket === '[') {
            stack.push(bracket);
        } else {
            if (!stack.length) {
                imbalance++;
            } else {
                stack.pop();
            }
        }
    }

    return Math.floor((imbalance + 1) / 2);
};