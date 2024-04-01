const isDesc = (array) => {
    if (array[0] > array[array.length - 1]) {
        return true;
    }
    return false;
};
const findMin = (nums) => {
    if (nums.length === 1 || !isDesc(nums)) {
        return nums[0];
    }
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    console.log(left, right);
    if (left.length > 1 && right.length > 1) {
        if (isDesc(left)) {
            return findMin(left);
        } else {
            return findMin(right);
        }
    } else if (left.length === 1 && right.length > 1) {
        if (isDesc(right)) {
            return findMin(right);
        } else {
            if (left[0] < right[0] && left[0] < right[right.length - 1]) {
                return left[0];
            } else {
                return findMin(right);
            }
        }
    } else if (right.length === 1 && left.length > 1) {
        if (isDesc(left)) {
            return findMin(left);
        } else {
            if (right[0] < left[0] && right[0] < left[left.length - 1]) {
                return right[0];
            } else {
                return findMin(left);
            }
        }
    } else {
        return Math.min(left[0], right[0]);
    }
};

const nums = [11,13,15,17];
console.log(findMin(nums));
