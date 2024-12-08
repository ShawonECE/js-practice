const iterToMap = (str) => {
    const map = new Map();
    for (const char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    return map;
};

const eqSet = (set1, set2) => {
    if (set1.size !== set2.size) {
        return false;
    }

    for (const element of set1) {
        if (!set2.has(element)) {
            return false;
        }
    }

    return true;
};

const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }

    let map1 = iterToMap(word1);
    let map2 = iterToMap(word2);

    if (!eqSet(new Set(map1.keys()), new Set(map2.keys()))) {
        return false;
    }

    const frequencies1 = Array.from(map1.values()).sort((a, b) => a - b);
    const frequencies2 = Array.from(map2.values()).sort((a, b) => a - b);

    return frequencies1.join() === frequencies2.join();

    // const values1 = map1.values();
    // const values2 = map2.values();

    // const valueMap1 = iterToMap(values1);
    // const valueMap2 = iterToMap(values2);

    // for (const [key, value] of valueMap1) {
    //     if (!valueMap2.has(key) || valueMap2.get(key) !== value) {
    //         return false;
    //     }
    // }

    // return true;
};

const word1 = "abbzzca", word2 = "babzzcz";
console.log(closeStrings(word1, word2));