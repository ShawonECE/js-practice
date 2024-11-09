const finder = (word, k) => {
    if (word.length >= k) {
        return word[k - 1];
    }
    let secondary = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === "z") {
            secondary.push(97);
        } else {
            secondary.push(word.charCodeAt(i) + 1);
        }
        
    }

    return finder(word + String.fromCharCode(...secondary), k);
};

const kthCharacter = (k) => {
    let initialWord = "a";
    return finder(initialWord, k);    
};

console.log(kthCharacter(10));