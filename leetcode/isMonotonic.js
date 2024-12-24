const isMonotonic = (nums) => {
    if (nums.length === 1) {
        return true;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            break;
        }

        if (i === nums.length - 1) {
            return true;
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            break;
        }

        if (i === nums.length - 1) {
            return true;
        }
    }

    return false;
};