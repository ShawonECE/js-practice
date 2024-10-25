const canConstruct = (ransomNote, magazine) => {
    const magazineMap = {};
    for (const char of magazine) {
        if (magazineMap[char]) {
            magazineMap[char]++;
        } else {
            magazineMap[char] = 1;
        }
    }

    for (const char of ransomNote) {
        if (magazineMap[char] > 0) {
            magazineMap[char]--;
        } else {
            return false;
        }
    }

    return true;
};

const ransomNote = "aa", magazine = "aab";
console.log(canConstruct(ransomNote, magazine));