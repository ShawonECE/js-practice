const containsDuplicate = (nums) => {
    const set = new Set(nums);

    if (set.size === nums.length) {
        return false;
    } else {
        return true;
    }
};

const array = [1,2,3,4];

console.log(containsDuplicate(array));