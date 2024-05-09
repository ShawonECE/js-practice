const findTheArrayConcVal = (nums) => {
    const length = nums.length;
    let left = 0;
    let right = length - 1;
    let result = 0;
    while (left <= right) {
        if (left === right) {
            return result + nums[left];
        }
        let rightDigits;
        if (nums[right] >= 1 && nums[right] <= 9) {
            rightDigits = 1;
        } else if (nums[right] >= 10 && nums[right] <= 99) {
            rightDigits = 2;
        } else if (nums[right] >= 100 && nums[right] <= 999) {
            rightDigits = 3;
        } else if (nums[right] >= 1000 && nums[right] <= 9999) {
            rightDigits = 4;
        } else {
            rightDigits = 5;
        }
        result += nums[left]*((10)**rightDigits) + nums[right];
        left++;
        right--;
    }
    return result;
};

const nums = [5,14,13,8,12];
console.log(findTheArrayConcVal(nums));