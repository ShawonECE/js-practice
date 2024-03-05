const removeElement = (nums, val) => {
    let index = 0;
    while(index < nums.length) {
        if (nums[index] === val) {
            nums.splice(index, 1);
            continue;
        }
        index++;
    }
    return nums.length;
};

const array = [3,2,2,3];
console.log(removeElement(array, 3));
console.log(array);