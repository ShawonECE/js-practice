// const removeDuplicates = (nums) => {
//     let index = 0;
//     while (index < nums.length) {
//         if (nums[index] === nums[index + 1]) {
//             nums.splice(index + 1, 1);
//             continue;
//         }

//         index++;
//     }

//     return nums.length;
// };

// const removeDuplicates = (nums) => {
//     let index = 0;
//     while (index < nums.length) {
//         let nextIndex = index + 1;
//         let occurrences = 0;
//         while (nums[nextIndex] === nums[index]) {
//             occurrences++;
//             nextIndex++;
//         }
//         if (occurrences > 0) {
//             nums.splice(index + 1, occurrences);
//         }
//         index++;
//     }

//     return nums.length;
// };

const removeDuplicates = (nums) => {
    let currentUniqueIdx = 0;
    let nextUniqueIdx = 1;

    while (nextUniqueIdx < nums.length) {
        if (nums[currentUniqueIdx] !== nums[nextUniqueIdx]) {
            currentUniqueIdx++;
            nums[currentUniqueIdx] = nums[nextUniqueIdx];
        }

        nextUniqueIdx++;
    }

    return currentUniqueIdx + 1;
};

const array = [1, 2];
console.log(removeDuplicates(array));
console.log(array);