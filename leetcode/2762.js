// brute force
// const continuousSubarrays = (nums) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let max = -Infinity;
//         let min = Infinity;

//         for (let j = i; j < nums.length; j++) {
//             max = Math.max(max, nums[j]);
//             min = Math.min(min, nums[j]);

//             if (max - min <= 2) {
//                 count++;
//             }
//         }
//     }

//     return count;
// };

// sliding window
const continuousSubarrays = (nums) => {
    let left = 0;
    let right = 0;
    const length = nums.length;
    let count = 0;
    let min = nums[0];
    let max = nums[0];

    for (right = 0; right < length; right++) {
        min = Math.min(min, nums[right]);
        max = Math.max(max, nums[right]);

        // if (right === 7 && left === 3) {
        //     console.log(min, max);
        // }

        if (max - min > 2) {
            count += ((right - left)*(right - left + 1)) / 2;
            left = right;
            min = nums[right];
            max = nums[right];

            while(Math.abs(nums[right] - nums[left - 1]) <= 2) {
                left--;
                min = Math.min(min, nums[left]);
                max = Math.max(max, nums[left]);
            }

            count -= ((right - left)*(right - left + 1)) / 2;
        }
    }

    count += ((right - left)*(right - left + 1)) / 2;
    return count;
};

const nums = [65,66,65,64,63,62,62];
console.log(continuousSubarrays(nums));