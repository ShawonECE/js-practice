const largestSumAfterKNegations = (nums, k) => {
    nums.sort((a, b) => a - b);
    let negativeChanged = false;

    for (let i = 0; i < k; i++) {
        if (nums[i] < 0) {
            negativeChanged = true;
            nums[i] = (-1) * nums[i];
        } else if (nums[i] === 0) {
            break;
        } else {
            let remaining = k - i;

            if (remaining % 2 !== 0) {
                if (negativeChanged) {
                    nums.sort((a, b) => a - b);
                }
                nums[0] = (-1) * nums[0];
            }

            break;
        }
    }

    return nums.reduce((a, b) => a + b, 0);
};

const nums = [2,-3,-1,5,-4], k = 2;
console.log(largestSumAfterKNegations(nums, k));