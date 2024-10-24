const makeSmallestPalindrome = (s) => {
    const length = s.length;
    let firstHalf = "", secondHalf = "";
    let i = 0, j = length - 1;
    while (i < j) {
        if (s[i] === s[j]) {
            firstHalf = firstHalf + s[i];
            secondHalf = s[j] + secondHalf;
        } else {
            if (s.charCodeAt(i) < s.charCodeAt(j)) {
                firstHalf = firstHalf + s[i];
                secondHalf = s[i] + secondHalf;
            } else {
                firstHalf = firstHalf + s[j];
                secondHalf = s[j] + secondHalf;
            }
        }
        i++;
        j--;
    }

    return length % 2 === 0 ? firstHalf + secondHalf : firstHalf + s[Math.floor(length / 2)] + secondHalf;
};

const s = "seven";
console.log(makeSmallestPalindrome(s));
