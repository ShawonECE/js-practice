const nums = [2,7,11,15];
// const twoSum = (nums, target) => {
//     const length = nums.length;
//     for (let i = 0; i < length; i++) {
//         let remaining = target - nums[i];
//         let j = i + 1;
//         while (j < length) {
//             if (nums[j] === remaining) {
//                 return [i, j];
//             }
//             j++;
//         }
        
//     }
//     return false;
// };

const twoSum = (nums, target) => {
    const memo = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        const remaining = target - num;
        if (memo[remaining] >= 0) {
            return [i, memo[remaining]];
        }
        memo[num] = i;
    }
};

console.log(twoSum(nums, 9));