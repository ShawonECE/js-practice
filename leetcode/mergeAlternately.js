const mergeAlternately = (word1, word2) => {
    const length1 = word1.length;
    const length2 = word2.length;
    const minLength = Math.min(length1, length2);
    const maxLength = Math.max(length1, length2);
    let result = "";

    for (let i = 0; i < minLength; i++) {
        result += word1[i];
        result += word2[i];
    }

    if (length1 < length2) {
        result += word2.slice(minLength, maxLength);
    } else if (length1 === length2) {
        return result;
    } else {
        result += word1.slice(minLength, maxLength);
    }

    return result;
};