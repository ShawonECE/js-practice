const finalPrices = (prices) => {
    const length = prices.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] = prices[i] - prices[j];
                break;
            }
        }
    }
    return prices;
};

const prices = [10,1,1,6];
console.log(finalPrices(prices));
