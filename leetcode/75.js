// const sortColors = (nums) => {
//     const count = [0, 0, 0];

//     for (const num of nums) {
//         count[num]++;
//     }

//     let current = 0;

//     for (let i = 0; i < nums.length; i++) {
//         while (count[current] <= 0) {
//             current++;
//         }

//         nums[i] = current;
//         count[current]--;
//     }
// };

const sortColors = (nums) => {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};