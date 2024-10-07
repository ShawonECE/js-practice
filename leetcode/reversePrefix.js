const reversePrefix = (word, ch) => {
    let idx;
    let newWord = '';
    for (const index in word) {
        newWord = word[index] + newWord;
        if (word[index] === ch) {
            idx = parseInt(index);
            break;
        } 
    }
    return idx ? newWord + word.slice(idx + 1, word.length) : word;
};

const word = "xyxzxe", ch = "z";
console.log(reversePrefix(word, ch));
