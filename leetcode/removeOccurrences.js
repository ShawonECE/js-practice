const removeOccurrences = (s, part) => {
    const partLength = part.length;
    const stack = [];

    for (const char of s) {
        stack.push(char);

        if (stack.length >= partLength) {
            const lastSeq = stack.slice(-partLength).join('');
            if (lastSeq === part) {
                for (let i = 0; i < partLength; i++) {
                    stack.pop();
                }
            }
        }
    }

    return stack.join('');
};