const targetIndices = (nums, target) => {
    const length = nums.length;
    const indices = [];
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = length - 1;
    let firstIdx = undefined;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (nums[mid] === target) {
            if (mid === 0) {
                firstIdx = mid;
                break;
            }

            if (nums[mid - 1] < target) {
                firstIdx = mid;
                break;
            } else {
                j = mid - 1;
            }
        } else if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }

    if (firstIdx === undefined) {
        return indices;
    } else {
        for (let index = firstIdx; index < length; index++) {
            if (nums[index] === target) {
                indices.push(index);
            } else {
                break;
            }
        }
    }

    return indices;
};

const nums = [1,2,5,2,3], target = 5;
console.log(targetIndices(nums, target));