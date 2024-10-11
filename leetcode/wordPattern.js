const wordPattern = (pattern, s) => {
    const words = s.split(' ');
    const memo = {};
    if (words.length !== pattern.length || (new Set(words)).size !== (new Set(pattern.split(''))).size) {
        return false;
    } 
    for (let i = 0; i < pattern.length; i++) {
        if (!memo[pattern[i]]) {
            memo[pattern[i]] = words[i];
        } else {
            if (memo[pattern[i]] !== words[i]) {
                return false;
            }
        }
    }
    return true;
};

const pattern = "abba", s = "dog dog dog dog";
console.log(wordPattern(pattern, s));
