const numIdenticalPairs = (nums) => {
    const length = nums.length;
    let count = 0;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};

const nums = [1,1,1,1];
console.log(numIdenticalPairs(nums));