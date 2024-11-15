const hashTableMaker = (iterator) => {
    const hashTable = new Map();

    for (const element of iterator) {
        if (hashTable.has(element)) {
            hashTable.set(element, hashTable.get(element) + 1);
        } else {
            hashTable.set(element, 1);
        }
    }

    return hashTable;
};

const mostCommonWord = (paragraph, banned) => {
    const paragraphWords = paragraph.match(/\b\w+\b/g);
    const mostFrequent = {
        word: "",
        count: 0
    };

    const bannedSet = new Set(banned);
    const wordsTable = new Map();

    for (let word of paragraphWords) {
        word = word.toLowerCase();

        if (!bannedSet.has(word)) {
            if (wordsTable.has(word)) {
                wordsTable.set(word, wordsTable.get(word) + 1);
            } else {
                wordsTable.set(word, 1);
            }

            if (wordsTable.get(word) > mostFrequent.count) {
                mostFrequent.count = wordsTable.get(word);
                mostFrequent.word = word;
            }
        }
    }

    return mostFrequent.word;
};

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));