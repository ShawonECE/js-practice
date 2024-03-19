const count = (array, target) => {
    let count = 0;
    for (const element of array) {
        if (element === target) {
            count++;
        }
    }
    return count;
};

const isGood = (nums) => {
    const maxValue = Math.max(...nums);
    const length = nums.length;
    if (count(nums, maxValue) !== 2 || length !== maxValue + 1) {
        return false;
    }

    for (let i = 1; i < maxValue; i++) {
        if (!nums.includes(i)) {
            return false;
        }        
    }

    return true;
};

const nums = [3, 4, 4, 1, 2, 1];
console.log(isGood(nums));