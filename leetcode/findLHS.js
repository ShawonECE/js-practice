const findLHS = (nums) => {
    const memo = {};
    const length = nums.length;
    let longest = 0;
    for (let i = 0; i < length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]]++;
        } else {
            memo[nums[i]] = 1;
        }
    }
    for (const key in memo) {
        if (memo[parseInt(key) + 1]) {
            longest = Math.max(longest, memo[key] + memo[parseInt(key) + 1]);
        }
    }
    return longest;
};

const nums = [1,3,2,2,5,2,3,7];
console.log(findLHS(nums));
