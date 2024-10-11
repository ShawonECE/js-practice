const findShortestSubArray = (nums) => {
    const memo = {};
    const positionMemo = {};
    let maxOccurrences = 0;
    let length = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (memo[nums[i]]) {
            memo[nums[i]]++;
            positionMemo[nums[i]].last = i;
        } else {
            memo[nums[i]] = 1;
            positionMemo[nums[i]] = {
                first: i,
                last: i
            };
        }

        if (memo[nums[i]] > maxOccurrences) {
            maxOccurrences = memo[nums[i]];
        }
    }

    for (const key in memo) {
        if (memo[key] === maxOccurrences) {
            length = Math.min(length, positionMemo[key].last - positionMemo[key].first + 1);
        }
    }
    return length;
};

// const findShortestSubArray = (nums) => {
//     const memo = {};
//     let maxOccurrences = 0;
//     let length = Infinity;
//     for (const num of nums) {
//         if (memo[num]) {
//             memo[num]++;
//         } else {
//             memo[num] = 1;
//         }

//         if (memo[num] > maxOccurrences) {
//             maxOccurrences = memo[num];
//         }
//     }

//     for (const key in memo) {
//         if (memo[key] === maxOccurrences) {
//             length = Math.min(length, nums.lastIndexOf(parseInt(key)) - nums.indexOf(parseInt(key)) + 1);
//         }
//     }
//     return length;
// };

const nums = [2, 1];
console.log(findShortestSubArray(nums));
