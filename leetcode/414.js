// const thirdMax = (nums) => {
//     const numSet = new Set(nums);
//     if (numSet.size < 3) {
//         return Math.max(...numSet);
//     } else {
//         if (numSet.size === 3) {
//             return Math.min(...numSet);
//         } else {
//             let max = Math.max(...numSet);
//             numSet.delete(max);
//             max = Math.max(...numSet);
//             numSet.delete(max);
//             return Math.max(...numSet);
//         }
//     }
// };

const thirdMax = (nums) => {
    let first_max = -Infinity;
    let second_max = -Infinity;
    let third_max = -Infinity;

    for (const num of nums) {
        if (first_max === num || second_max === num || third_max === num) {
            continue;
        }

        if (num > first_max) {
            third_max = second_max;
            second_max = first_max;
            first_max = num;
        } else if (num > second_max) {
            third_max = second_max;
            second_max = num;
        } else if (num > third_max) {
            third_max = num;
        }
    }

    return third_max === -Infinity ? first_max : third_max;
};