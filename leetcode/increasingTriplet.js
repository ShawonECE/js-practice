const increasingTriplet = (nums) => {
    const length = nums.length;
    if (length < 3) return false;

    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1,5,0,4,1,3];
console.log(increasingTriplet(nums));