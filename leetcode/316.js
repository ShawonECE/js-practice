const removeDuplicateLetters = (s) => {
    const present = new Set();
    const map = new Map();
    const stack = [];

    for (const char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }        
    }

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) - 1);

        if (!present.has(s[i])) {
            while(stack.length && s[i] < stack[stack.length - 1] && map.get(stack[stack.length - 1]) > 0) {
                present.delete(stack.pop());
            }

            stack.push(s[i]);
            present.add(s[i]);
        }
    }

    return stack.join('');
};