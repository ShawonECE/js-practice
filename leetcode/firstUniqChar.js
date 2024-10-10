const firstUniqChar = (s) => {
    const memo = {};
    const length = s.length;
    for (const char of s) {
        if (memo[char]) {
            memo[char]++;
        } else {
            memo[char] = 1;
        }
    }
    for (let i = 0; i < length; i++) {
        if(memo[s[i]] === 1) {
            return i;
        }
    }
    return -1;
};