const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    for (const char of stones) {
        if (jewels.includes(char)) {
            count++;
        }
    }
    return count;
};

const jewels = "z", stones = "ZZ";
console.log(numJewelsInStones(jewels, stones));