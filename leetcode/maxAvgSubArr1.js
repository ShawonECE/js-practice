// const average = (array) => {
//     let sum = array.reduce((a, b) => a + b, 0);
//     return (sum / array.length);
// };

// const findMaxAverage = (nums, k) => {
//     let maxAvg = -Infinity;
//     const length = nums.length;

//     for (let i = 0; i <= length - k; i++) {
//         let sub = nums.slice(i, i+k);
//         let currentAvg = average(sub);
//         if (currentAvg > maxAvg) {
//             maxAvg = currentAvg;
//         }        
//     }
//     return currentAvg;
// };

const findMaxAverage = (nums, k) => {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum = sum + nums[i];
    }
    maxSum = sum;
    const length = nums.length;
    let left = 0;

    for (let right = k; right < length; right++) {
        sum = sum + nums[right] - nums[left];        
        maxSum = Math.max(maxSum, sum);
        left++;
    }
    return (maxSum / k);
};


const array = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(array, 4));