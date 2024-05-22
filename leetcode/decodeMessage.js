const decodeMessage = (key, message) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let decoded = '';
    const table = {};
    let pointer = 0;
    for (const char of key) {
        if (!table[char] && char !== ' ') {
            table[char] = letters[pointer];
            pointer++;
        }
    }
    for (const char of message) {
        if (char === ' ') {
            decoded = decoded + char;
        } else {
            decoded = decoded + table[char];
        }
    }
    return decoded;
};

const key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
console.log(decodeMessage(key, message));