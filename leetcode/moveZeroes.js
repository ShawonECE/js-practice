const moveZeroes = (nums) => {
    const nonZeros = [];
    for (const num of nums) {
        if (num !== 0) {
            nonZeros.push(num);
        }
    }

    const length = nonZeros.length;

    for (let i = 0; i < nums.length; i++) {
        if (nonZeros[i]) {
            nums[i] = nonZeros[i];
        } else {
            nums[i] = 0;
        }
    }
};

const nums = [0, 0, 1];
moveZeroes(nums)
console.log(nums);

// console.log(nonZeroAfterThis(nums, 2));