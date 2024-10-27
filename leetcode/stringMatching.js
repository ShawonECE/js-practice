const stringMatching = (words) => {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        let current = words[i];
        for (let j = 0; j < words.length; j++) {
            if (current.length < words[j].length && words[j].includes(current)) {
                result.push(current);
                break;
            }
        }
    }
    return result;
};

const words = ["leetcode","et","code"];
console.log(stringMatching(words));