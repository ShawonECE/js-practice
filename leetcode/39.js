const combinationSum = (candidates, target) => {
    const result = [];

    const helper = (i, nums, remaining) => {
        if (remaining === 0) {
            result.push([...nums]);
            return;
        } 

        if (remaining < 0 || i >= candidates.length) {
            return;
        }

        nums.push(candidates[i]);
        helper(i, nums, remaining - candidates[i]);
        nums.pop();
        helper(i + 1, nums, remaining);
    };

    helper(0, [], target);
    return result;
};

const candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));