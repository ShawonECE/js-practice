const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];

// const twoSum = (nums, target, skip) => {
//     let arr = [...nums];
//     arr.splice(skip, 1);
//     const result = [];
//     const memo = {};
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         const num = arr[i];
//         const remaining = target - num;
//         if (memo[remaining] >= 0) {
//             result.push([num, remaining, -target]);
//         }
//         memo[num] = i;
//     }
//     return result;
// };

// const threeSum = (nums) => {
//     nums.sort((a, b) => a - b);
//     const result = [];
//     const resultString = [];
//     const history = {};
//     for (const idx in nums) {
//         const num = nums[idx];
//         if (history[num]) {
//             continue;
//         }
//         let threes = twoSum(nums, -num, idx);
//         history[num] = true;

//         for (const three of threes) {
//             if (three[0] === -0) {
//                 three[0] = 0;
//             }
//             if (three[1] === -0) {
//                 three[1] = 0;
//             }
//             const currentResult = [...three];
//             currentResult.sort((a, b) => a - b);
//             const currentString = JSON.stringify(currentResult);
//             if (!resultString.includes(currentString)) {
//                 result.push(currentResult);
//                 resultString.push(currentString);
//             }
//         }
//     }
//     return result;
// };

const twoSum = (nums, target, start) => {
    const result = [];
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target || (left > start && nums[left] === nums[left - 1])) {
            left++; // Skip duplicate values
        } else if (sum > target || (right < nums.length - 1 && nums[right] === nums[right + 1])) {
            right--; // Skip duplicate values
        } else {
            result.push([nums[left], nums[right]]);
            left++;
            right--;
        }
    }

    return result;
};

const threeSum = (nums) => {
    nums.sort((a, b) => a - b); // Sort the array to make two-pointer approach feasible
    const result = [];

    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) { // Skip duplicates
            const twoSumPairs = twoSum(nums, -nums[i], i + 1);
            for (const pair of twoSumPairs) {
                result.push([nums[i], ...pair]);
            }
        }
    }

    return result;
};
console.log(threeSum(nums));