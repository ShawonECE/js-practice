// const binarySearch = (array, element) => {
//     let start = 0, end = array.length - 1;

//     while (start <= end) {
//         let mid = Math.round((start + end) / 2);

//         if (array[mid] === element) {
//             return mid;
//         } else if (element < array[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }

//     return -1;
// };

// const findDisappearedNumbers = (nums) => {
//     nums.sort((a, b) => a - b);
//     const result = [];

//     for (let i = 1; i <= nums.length; i++) {
//         if (binarySearch(nums, i) === -1) {
//             result.push(i);
//         }
//     }

//     return result;
// };

const findDisappearedNumbers = (nums) => {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        nums[idx] = -Math.abs(nums[idx]);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};