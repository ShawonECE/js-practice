const leftRightDifference = (nums) => {
    const length = nums.length;
    const leftSum = [0];
    const rightSum = [];
    rightSum[length - 1] = 0;
    const answer = [];

    for (let i = 1; i < length; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }

    for (let i = length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    for (let i = 0; i < length; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
};

const nums = [1];
console.log(leftRightDifference(nums));