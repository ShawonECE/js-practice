const flip = (n) => {
    if (n === 0) {
        return 1;
    }
    return 0;
};

const minOperations = (nums) => {
    const length = nums.length;
    let ops = 0;

    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            if (i + 2 < length) {
                nums[i] = flip(nums[i]);
                nums[i + 1] = flip(nums[i + 1]);
                nums[i + 2] = flip(nums[i + 2]);

                ops++;
            } else {
                return -1;
            }
        }
    }

    return ops;
};

const nums = [0,1,1,1,0,0];
console.log(minOperations(nums));