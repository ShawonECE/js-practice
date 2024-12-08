const reverseWords = (s) => {
    s = s.trim();
    const words = s.split(' ');
    let result = '';
    
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            result += words[i];
            result += ' ';
        }
    }

    return result.trim();
};