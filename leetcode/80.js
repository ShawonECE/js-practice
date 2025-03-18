const removeDuplicates = (nums) => {
    let currentUniqueIdx = 0;
    let nextUniqueIdx = 1;

    while (nextUniqueIdx < nums.length) {
        if (nums[currentUniqueIdx] !== nums[nextUniqueIdx] || nums[currentUniqueIdx] !== nums[currentUniqueIdx - 1]) {
            currentUniqueIdx++;
            nums[currentUniqueIdx] = nums[nextUniqueIdx];
        }

        nextUniqueIdx++;
    }

    return currentUniqueIdx + 1;
};