const maxCoins = (piles) => {
    const length = piles.length;
    const cycles = length / 3;
    piles.sort((a, b) => a - b);
    let myCoins = 0;
    for (let i = cycles; i < length; i = i + 2) {
        myCoins = myCoins + piles[i];
    }
    return myCoins;
};

const piles = [9,8,7,6,5,1,2,3,4];
console.log(maxCoins(piles));