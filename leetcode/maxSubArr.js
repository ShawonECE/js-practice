// const maxSubArray = (nums) => {
//     const length = nums.length;
//     let maxSum = -Infinity;

//     for (let i = 0; i < length; i++) {
//         let sum = nums[i];
//         for (let j = i; j < length; j++) {
//             if (j !== i) {
//                 sum = sum + nums[j];
//             }
//             maxSum = Math.max(maxSum, sum);
//         }
//     }
//     return maxSum;
// };

const maxSubArray = (nums) => {
    let maxSum = Math.max(...nums);
    let currentSum = 0;
    for (const num of nums) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum = currentSum + num;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};

const array = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(array));