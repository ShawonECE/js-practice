const strStr = (haystack, needle) => {
    const hLength = haystack.length;
    const nLength = needle.length;
    if (nLength > hLength) {
        return -1;
    }
    let match = 0;
    let matchIdx = -1;
    let key = 0;
    const keyChar = needle[0];
    for (let i = 0; i < hLength - nLength + 1; i++) {
        if (haystack[i] === keyChar) {
            match++;
            matchIdx = i;
            if (match === nLength) {
                return matchIdx;
            }
            for (let j = 1; j < nLength; j++) {
                if (haystack[j + i] === needle[j]) {
                    console.log("match", haystack[j + i], needle[j], i, j);
                    match++;
                    if (match === nLength) {
                        return matchIdx;
                    }
                } else {
                    console.log("not match", haystack[j + i], needle[j], i, j);
                    match = 0;
                    matchIdx = -1;
                    break;
                }
            }
        }
    }
    return matchIdx; 
};

const haystack = "aaa", needle = "a";
console.log(strStr(haystack, needle));