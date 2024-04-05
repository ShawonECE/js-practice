const isSubsequence = (s, t) => {
    const length = s.length;
    if (length === 0) {
        return true;
    }
    if (length > t.length) {
        return false;
    }
    let i = 0;
    for (const char of t) {
        if (char === s[i]) {
            i++;
            if (i === length) {
                return true;
            }
        }
    }
    return false;
};
const s = "axc", t = "ahbgdc";
console.log(isSubsequence(s, t));