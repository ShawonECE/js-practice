const findTheDifference = (s, t) => {
    const memo1 = {};
    const memo2 = {};
    for (const char of s) {
        if (memo1[char]) {
            memo1[char]++;
        } else {
            memo1[char] = 1;
        }
    }

    for (const char of t) {
        if (memo2[char]) {
            memo2[char]++;
        } else {
            memo2[char] = 1;
        }
    }
    
    for (const char in memo2) {
        if (!memo1[char] || memo1[char] < memo2[char]) {
            return char;
        }
    }
};

const s = "a", t = "aa";
console.log(findTheDifference(s, t));