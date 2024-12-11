const largestPerimeter = (nums) => {
    nums.sort((a, b) => b - a);
    let i = 0, j = 1, k = 2;

    while (k < nums.length) {
        if (nums[i] + nums[j] > nums[k]) {
            return nums[i] + nums[j] + nums[k];
        }

        i++; 
        j++; 
        k++;
    }

    return 0;
};

const nums = [1,2,1,10];
console.log(largestPerimeter(nums));