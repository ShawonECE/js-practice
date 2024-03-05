const searchRange = (nums, target) => {
    const first = nums.findIndex(num => num === target);
    let last = first;
    while(nums[last + 1] === target) {
        last++;
    }
    return [first, last];
};

const array = [3];
console.log(searchRange(array, 3));