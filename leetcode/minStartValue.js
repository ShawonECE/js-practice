const minStartValue = (nums) => {
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
    }

    const minSum = Math.min(...prefixSum);
    if (minSum < 1) {
        return 1 - minSum;
    } else {
        return 1;
    }
};