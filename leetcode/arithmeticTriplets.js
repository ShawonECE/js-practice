const arithmeticTriplets = (nums, diff) => {
    const length = nums.length;
    let count = 0;
    for (let i = 0; i < length - 2; i++) {
        let j = i + 1, k = i + 2;
        while (nums[j] - nums[i] <= diff && nums[k] - nums[j] <= diff && j < length - 1 && k < length) {
            let diff1 = nums[j] - nums[i];
            let diff2 = nums[k] - nums[j];
            if (diff1 === diff && diff2 === diff) {
                count++;
                break;
            }
            if (diff1 < diff) {
                j++;
                k++;
            } else {
                k++;
            }
        }
    }
    return count;
};

let nums = [4,5,6,7,8,9], diff = 2;
console.log(arithmeticTriplets(nums, diff));