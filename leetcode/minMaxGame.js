const minMaxGame = (nums) => {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    }

    const newNums = [];
    for (let i = 0; i < length / 2; i++) {
        if (i % 2 === 0) {
            newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
        } else {
            newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }
    }
    return minMaxGame(newNums);
};

const nums = [3];
console.log(minMaxGame(nums));
