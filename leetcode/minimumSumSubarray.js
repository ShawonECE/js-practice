const minimumSumSubarray = (nums, l, r) => {
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
    }

    let minSum = Infinity;
    for (let i = l; i <= r; i++) {
        for (let j = 0; j + i - 1 < nums.length; j++) {
            // console.log(nums.slice(j, i + j));
            if (j === 0) {
                if(prefixSum[i + j - 1] > 0) {
                    minSum = Math.min(minSum, prefixSum[i + j - 1]);
                }
                // console.log(minSum);
            } else {
                if (prefixSum[i + j - 1] - prefixSum[j - 1] > 0) {
                    minSum = Math.min(minSum, prefixSum[i + j - 1] - prefixSum[j - 1]);
                }
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};

const nums = [1, 2, 3, 4], l = 2, r = 4;
console.log(minimumSumSubarray(nums, l, r));