const majorityElement = (nums) => {
    const memo = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]]++;
        } else {
            memo[nums[i]] = 1;
        }

        if (memo[nums[i]] > length / 2) {
            return nums[i];
        }
    }
};

const nums = [2,3, 3];
console.log(majorityElement(nums));