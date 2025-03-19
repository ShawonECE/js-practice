// brute force
// const rotate = (nums, k) => {
//     const rotations = k % nums.length;
//     for (let i = 0; i < rotations; i++) {
//         nums.unshift(nums.pop());
//     }
// };

// better
// const rotate = (nums, k) => {
//     k = k % nums.length;
//     const lastKElements = nums.slice(-k);
//     let insertPos = nums.length - 1;

//     for (let i = nums.length - k - 1; i >= 0; i--) {
//         nums[insertPos] = nums[i];
//         insertPos--;
//     }

//     for (let i = 0; i < lastKElements.length; i++) {
//         nums[i] = lastKElements[i];
//     }
// };

// best
const rotate = (nums, k) => {
    const n = nums.length;
    k %= n; // Handle cases where k >= n

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1);      // Reverse the entire array
    reverse(0, k - 1);      // Reverse the first k elements
    reverse(k, n - 1);      // Reverse the remaining elements
};
