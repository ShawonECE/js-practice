const repeatedSubstringPattern = (s) => {
    const length = s.length;
    const halfLength = Math.floor(length / 2);
    for (let i = 1; i <= halfLength; i++) {
        if (length % i !== 0 ) {
            continue;
        }
        let subString = s.substr(0, i);
        for (let j = i; j <= length - i; j = j + i) {
            if (s.substr(j, i) !== subString) {
                break;
            }

            if (j === length - i) {
                return true;
            }
        }
    }
    return false;
};

const s = "abcabcabcabc";
console.log(repeatedSubstringPattern(s));