const fairCandySwap = (aliceSizes, bobSizes) => {
    const aliceSet = new Set(aliceSizes);
    const bobSet = new Set(bobSizes);

    const aliceSum = aliceSizes.reduce((a, b) => a + b, 0);
    const bobSum = bobSizes.reduce((a, b) => a + b, 0);
    const difference = Math.abs(aliceSum - bobSum);

    // console.log(difference, bobSum, aliceSum);

    if (aliceSum > bobSum) {
        for (let x = 1; x < aliceSum; x++) {
            let y = x - 0.5 * difference;
            if (aliceSet.has(x) && bobSet.has(y)) {
                return [x, y];
            }
        }
    } else {
        for (let x = 1; x < bobSum; x++) {
            let y = x - 0.5 * difference;
            if (bobSet.has(x) && aliceSet.has(y)) {
                return [y, x];
            }
        }
    }
};

const aliceSizes = [2], bobSizes = [1,3];
console.log(fairCandySwap(aliceSizes, bobSizes));