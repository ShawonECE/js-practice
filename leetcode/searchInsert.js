const searchInsert = (nums, target) => {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        let middle = Math.round((i + j) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (target > nums[middle]) {
            i = middle + 1;
        } else {
            j = middle - 1;
        }
    }

    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};

const nums = [1,3,5,6], target = 7;
console.log(searchInsert(nums, target));
