const longestCommonPrefix = (strs) => {
    const strLength = strs[0].length;
    const length = strs.length;
    let prefix = '';
    for (let i = 0; i < strLength; i++) {
        let char = strs[0][i];
        for (let j = 1; j < length; j++) {
            if (strs[j][i] === char) {
                continue;
            } else {
                return prefix;
            }
        }
        prefix = prefix + char;
    }
    return prefix;
};

const strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));