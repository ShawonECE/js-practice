const countPairs = (nums, target) => {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    let count = 0;
    let i = 0;
    let j = 1;
    while (i < length - 1) {
        if (nums[i] + nums[j] < target) {
            count++;
        } else {
            i++;
            j = i + 1;
            continue;
        }

        if (j === length - 1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
    return count;
};

const nums = [-6,2,5,-2,-7,-1,3];
console.log(countPairs(nums, -2));