const maxNumberOfBalloons = (text) => {
    const chars = new Set(['b', 'a', 'l', 'o', 'n']);
    const requiredChars = new Map();

    for (const char of text) {
        if (chars.has(char)) {
            if (requiredChars.has(char)) {
                requiredChars.set(char, requiredChars.get(char) + 1);
            } else {
                requiredChars.set(char, 1);
            }
        }
    }

    const balloons = Math.min(requiredChars.get('b'), requiredChars.get('a'), requiredChars.get('n'), Math.floor(requiredChars.get('l') / 2), Math.floor(requiredChars.get('o') / 2));
    return balloons ? balloons : 0;
};

const text = "leetcode";
console.log(maxNumberOfBalloons(text));