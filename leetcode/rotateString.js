const findIndices = (str, char) => {
    const indices = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i);
        }
    }
    return indices;
}

const rotateString = (s, goal) => {
    if (s.length !== goal.length) {
        return false;
    } else if (s === goal) {
        return true;
    } else {
        const char1 = goal[0];
        const indices = findIndices(s, char1);
        if (!indices.length) {
            return false;
        }
        for (let index of indices) {
            const left = s.slice(0, index);
            const right = s.slice(index);
            const newString = right + left;

            if (newString === goal) {
                return true;
            }
        }
        return false;
    }
};

console.log(rotateString('bcdbbe', 'bebcdb'));