const sortArrayByParityII = (nums) => {
    const length = nums.length;
    let i = 0;
    let j = 1;
    while (i < length - 1) {
        if ((nums[i] % 2 === 0 && i % 2 === 0) || (nums[i] % 2 !== 0 && i % 2 !== 0)) {
            i++;
            j = i + 1;
        } else {
            if (i % 2 === 0 && j % 2 !== 0 && nums[j] % 2 === 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
                j = i + 1;
            } else if (i % 2 !== 0 && j % 2 === 0 && nums[j] % 2 !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
                j = i + 1;
            } else {
                j++;
            }
        }
    }
    return nums;
};

console.log(sortArrayByParityII([2,3,1,1,4,0,0,4,3,3]));
