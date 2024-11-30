const thirdMax = (nums) => {
    const numSet = new Set(nums);
    if (numSet.size < 3) {
        return Math.max(...numSet);
    } else {
        if (numSet.size === 3) {
            return Math.min(...numSet);
        } else {
            let max = Math.max(...numSet);
            numSet.delete(max);
            max = Math.max(...numSet);
            numSet.delete(max);
            return Math.max(...numSet);
        }
    }
};