const minCostClimbingStairs = (cost) => {
    let minCost = [];
    const length = cost.length;
    let j = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (i === length - 1 || i === length - 2) {
            minCost.push(cost[i]);
        } else {
            minCost.push(cost[i] + Math.min(minCost[j - 1], minCost[j - 2]));
        }
        j++;
    }
    return Math.min(minCost[length - 1], minCost[length - 2]);
};

console.log(minCostClimbingStair([1,100,1,1,1,100,1,1,100,1]));