const findWordsContaining = (words, x) => {
    const result = [];
    for (const idx in words) {
        if (words[idx].includes(x)) {
            result.push(idx);
        }
    }
    return result;
};