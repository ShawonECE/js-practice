const findTargetSumWays = (nums, target) => {
    const memo = new Map();
    const helper = (current, idx) => {
        if (idx === nums.length) {
            return current === target ? 1 : 0;
        }

        const key = `${current}-${idx}`;
        if (memo.has(key)) {
            return memo.get(key);
        }

        const add = helper(current + nums[idx], idx + 1);
        const subtract = helper(current - nums[idx], idx + 1);

        memo.set(key, add + subtract);
        return add + subtract;
    };

    return helper(0, 0);
};

const nums = [1], target = 1;
console.log(findTargetSumWays(nums, target));