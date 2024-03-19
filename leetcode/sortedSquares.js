const sortedSquares = (nums) => {
    let length = nums.length;
    let left = 0;
    let right = length - 1;
    const result = new Array(length);
    let i = length - 1;
    while (left <= right) {
        if (left === right) {
            console.log((nums[left])**2);
            result[i] = (nums[left])**2;
            break;
        }

        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = (nums[left])**2;
            left++;
        } else {
            result[i] = (nums[right])**2;
            right--;
        }
        i--;
    }
    return result;
};

const array = [-4, -1, 0, 3, 10];
console.log(sortedSquares(array));
