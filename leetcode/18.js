const twoSum = (nums, target, start) => {
    const result = [];
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target || (left > start && nums[left] === nums[left - 1])) {
            left++; // Skip duplicate values
        } else if (sum > target || (right < nums.length - 1 && nums[right] === nums[right + 1])) {
            right--; // Skip duplicate values
        } else {
            result.push([nums[left], nums[right]]);
            left++;
            right--;
        }
    }

    return result;
};

const threeSum = (nums, target, start) => {
    const result = [];

    for (let i = start; i < nums.length && nums[i] <= target; i++) {
        if (i === start || nums[i] !== nums[i - 1]) {
            const twoSumPairs = twoSum(nums, target - nums[i], i + 1);
            for (const pair of twoSumPairs) {
                result.push([nums[i], ...pair]);
            }
        }
    }

    return result;
};

const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length && nums[i] <= target; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            const threeSumPairs = threeSum(nums, target - nums[i], i + 1);
            for (const pair of threeSumPairs) {
                result.push([nums[i], ...pair]);
            }
        }
    }

    return result;
};

const nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums, target));