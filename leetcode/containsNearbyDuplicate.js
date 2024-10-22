const containsNearbyDuplicate = (nums, k) => {
    const length = nums.length;
    const memo = {};
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]] || memo[nums[i]] === 0) {
            if (Math.abs(memo[nums[i]] - i) <= k) {
                return true;
            }
        }
        memo[nums[i]] = i;
    }
    return false;
};

const nums = [1,2,3,1,2,3], k = 2;
console.log(containsNearbyDuplicate(nums, k));
