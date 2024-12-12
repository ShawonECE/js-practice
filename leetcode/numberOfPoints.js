const numberOfPoints = (nums) => {
    nums.sort((a, b) => a[0] - b[0]);
    let last = nums[0];
    
    let points = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i][0] <= last[1]) {
            if (last[1] + 1 <= nums[i][1]) {
                nums[i][0] = last[1] + 1;
            } else {
               nums[i] = []; 
            }
        }

        if (nums[i].length) {
            last = nums[i];
        }
    }

    // console.log(nums);

    for (const arr of nums) {
        if (arr.length) {
            points += arr[1] - arr[0] + 1;
        }
    }

    return points;
};

const nums = [[2,5],[3,8],[1,6],[4,10]];
console.log(numberOfPoints(nums));