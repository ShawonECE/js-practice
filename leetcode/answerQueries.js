const answerQueries = (nums, queries) => {
    nums.sort((a, b) => a - b);
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
    }
    const result = [];
    for (const query of queries) {
        let i = 0;
        let j = prefixSum.length - 1;
        let idx = -1;

        while (i <= j) {
            let mid = Math.round((i + j) / 2);
            if (prefixSum[mid] <= query) {
                idx = mid;
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        if (idx === -1) {
            result.push(0);
        } else {
            result.push(idx + 1);
        }
    }

    return result;
};

const nums = [2,3,4,5], queries = [1];
console.log(answerQueries(nums, queries));