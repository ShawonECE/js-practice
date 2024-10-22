const findMaxConsecutiveOnes = (nums) => {
    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentConsecutiveOnes++;
        } else {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes,currentConsecutiveOnes);
            currentConsecutiveOnes = 0;
        }

        if (i === nums.length - 1) {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes,currentConsecutiveOnes);
        }
    }

    return maxConsecutiveOnes;

};

const nums = [1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(nums));
