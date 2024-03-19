const singleNumber = (nums) => {
    const memo = {};
    for (const num of nums) {
        if (memo[num]) {
            memo[num] = memo[num] + 1;
        } else {
            memo[num] = 1;
        }
    }

    for (const key in memo) {
        if (memo[key] === 1) {
            return key;
        }
    }
};

const array = [2,2,7,3,3,1,1,9,9,4,4];
console.log(singleNumber(array));