const maxProfit = (prices) => {
    const length = prices.length;
    let left = 0;
    let right = 1;
    let profit = 0;
    while (right < length) {
        let newProfit = prices[right] - prices[left];
        if (newProfit > 0) {
            profit = Math.max(profit, newProfit);
        } else {
            left = right;
        }
        right++;
    }
    return profit;
};
const prices = [3,2,6,5,0,3];
console.log(maxProfit(prices));