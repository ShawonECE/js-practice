const minPairSum = (nums) => {
    const length = nums.length;
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = length - 1;
    let max = 0;

    while (left < right) {
        max = Math.max((nums[left] + nums[right]), max);
        left++;
        right--;
    }
    return max;
};

const nums = [3,5,4,2,4,6];
console.log(minPairSum(nums));