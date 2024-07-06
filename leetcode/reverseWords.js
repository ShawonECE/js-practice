const reverse = (string) => {
    let result = '';
    for (const char of string) {
        result = char + result;
    }
    return result;
};

const reverseWords = (s) => {
    const words = s.split(' ');
    const length = words.length;
    for (let i = 0; i < length; i++) {
        words[i] = reverse(words[i]);
    }
    return words.join(' ');
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));