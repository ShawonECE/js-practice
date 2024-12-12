class NumArray {
    constructor(nums) {
        const prefixSum = [nums[0]];

        for (let i = 1; i < nums.length; i++) {
            prefixSum.push(prefixSum[prefixSum.length - 1] + nums[i]);
        }

        this.nums = nums;
        this.prefixSum = prefixSum;
    };

    sumRange(left, right) {
        if (left === 0) {
            return this.prefixSum[right];
        } else {
            return this.prefixSum[right] - this.prefixSum[left - 1];
        }
    };
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));