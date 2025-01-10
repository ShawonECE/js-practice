const longestPalindrome = (s) => {
    let maxLength = 1;
    let maxRange = [0, 1];

    for (let i = 0; i < s.length; i++) {
        let j = i + 1;
        let k = i - 1;

        while (j < s.length && k >= 0 && s[j] === s[k]) {
            if (j - k + 1 > maxLength) {
                maxLength = j - k + 1;
                maxRange[0] = k;
                maxRange[1] = j + 1;
            }

            j++;
            k--;
        }

        if (s[i] === s[i + 1]) {
            if (maxLength < 2) {
                maxLength = 2;
                maxRange[0] = i;
                maxRange[1] = i + 2;
            }
            let j = i + 2;
            let k = i - 1;

            while (j < s.length && k >= 0 && s[j] === s[k]) {
                if (j - k + 1 > maxLength) {
                    maxLength = j - k + 1;
                    maxRange[0] = k;
                    maxRange[1] = j + 1;
                }

                j++;
                k--;
            }
        }
    }

    return s.slice(...maxRange);
};

const s = "cbbba";
console.log(longestPalindrome(s));