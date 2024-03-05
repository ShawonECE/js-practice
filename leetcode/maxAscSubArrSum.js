const maxAscendingSum = (nums) => {
    let current = 0, start = 0;
    const length = nums.length;
    const sums = [];
    
    while (current < length) {
        let sum = 0;
        for (let i = start; i < length; i++) {
            sum = sum + nums[i];
            current++;
            if (nums[i] >= nums[i+1] || i === length - 1) {
                start = i + 1;
                sums.push(sum);
                break;
            }
        }
    }

    return Math.max(...sums);
};

const array = [3,6,10,1,8,9,9,8,9];
console.log(maxAscendingSum(array));
