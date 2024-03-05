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

const removeDuplicates = (nums) => {
    let index = 0;
    while (index < nums.length) {
        let nextIndex = index + 1;
        let occurrences = 0;
        while (nums[nextIndex] === nums[index]) {
            occurrences++;
            nextIndex++;
        }
        if (occurrences > 0) {
            nums.splice(index + 1, occurrences);
        }
        index++;
    }

    return nums.length;
};

const array = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(array));
console.log(array);