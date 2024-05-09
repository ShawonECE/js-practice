const scoreOfString = (s) => {
    const length = s.length;
    let left = 0, right = 1, score = 0;
    while (right < length) {
        score += Math.abs(s.charCodeAt(right) - s.charCodeAt(left));
        left++;
        right++;
    }
    return score;
};

const s = "zaz";
console.log(scoreOfString(s));