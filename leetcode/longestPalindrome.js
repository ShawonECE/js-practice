const longestPalindrome = (s) => {
    const memo = {};
    let maxLength = 0;
    let oddTaken = false;
    for (const char of s) {
        if (memo[char]) {
            memo[char]++;
        } else {
            memo[char] = 1;
        }
    }

    for (const key in memo) {
        if (memo[key] % 2 === 0) {
            maxLength += memo[key];
        } else {
            if (oddTaken) {
                maxLength += memo[key] - 1;
            } else {
                maxLength += memo[key];
                oddTaken = true;
            }
        }
    }

    return maxLength;
};

const s = "a";
console.log(longestPalindrome(s));
