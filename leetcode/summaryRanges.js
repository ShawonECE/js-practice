const summaryRanges = (nums) => {
    const length = nums.length;
    const ranges = [];
    let completed = -1;
    for (let i = 0; i < length; i++) {
        if (nums[i + 1] - nums[i] !== 1 || i === length - 1) {
            if (completed + 1 === i) {
                ranges.push(`${nums[i]}`);
            } else {
                ranges.push(`${nums[completed + 1]}->${nums[i]}`);
            }
            completed = i;
        }
    }
    return ranges;
};

const nums = [0,2,3,4,6,8,9];
console.log(summaryRanges(nums));