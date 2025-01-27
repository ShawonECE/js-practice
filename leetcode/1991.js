const findMiddleIndex = nums => {
    const length = nums.length;
    const leftSum = [];
    const rightSum = [];

    let currentLeftSum = 0;
    let currentRightSum = 0;

    for (let i = 0; i < length; i++) {
        leftSum[i] = currentLeftSum;
        currentLeftSum += nums[i];
    }

    for (let i = length - 1; i >= 0; i--) {
        rightSum[i] = currentRightSum;
        currentRightSum += nums[i];
    }

    for (let i = 0; i < length; i++) {
        if (leftSum[i] === rightSum[i]) {
            return i;
        }
    }

    return -1;
}