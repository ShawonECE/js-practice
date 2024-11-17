const maximumCount = (nums) => {
    const length = nums.length;

    if (nums[0] < 0 && nums[length - 1] < 0) return length;
    if (nums[0] > 0 && nums[length - 1] > 0) return length;
    if (nums[0] === 0 && nums[length - 1] === 0) return 0;

    let i = 0;
    let j = length - 1;
    let firstPositiveIdx = undefined;
    let zeros = 0;
    let positives = 0;
    let negatives = 0;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (nums[mid] > 0) {
            if (mid === 0) {
                firstPositiveIdx = mid;
                break;
            }
            if (nums[mid - 1] <= 0) {
                firstPositiveIdx = mid;
                break;
            } else {
                j = mid - 1;
            }
        } else {
            i = mid + 1;
        }
    }

    if (firstPositiveIdx || firstPositiveIdx === 0) {
        positives = length - firstPositiveIdx;
        j = firstPositiveIdx - 1;
    } else {
        j = length - 1;
    }

    while (j >= 0) {
        if (nums[j] === 0) {
            zeros++;
        } else {
            break;
        }
        j--;
    }

    negatives = length - positives - zeros;
    return Math.max(positives, negatives);
};

const nums = [5,20,66,1314];
console.log(maximumCount(nums));