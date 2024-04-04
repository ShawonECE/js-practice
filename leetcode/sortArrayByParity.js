const sortArrayByParity = (nums) => {
    nums.sort((a, b) => {
        if (a % 2 === 0) {
            return -1;
        } else if (b % 2 === 0) {
            return 1;
        } else {
            return -1;
        }
    });
    return nums;
};

console.log(sortArrayByParity([0]));