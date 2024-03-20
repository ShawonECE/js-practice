const findMatrix = (nums) => {
    const result = [[]];
    const memo = {};
    for (const num of nums) {
        if (memo[num]) {
            if (result[memo[num]]) {
                result[memo[num]].push(num);
            } else {
                result[memo[num]] = [];
                result[memo[num]].push(num);
            }
            memo[num] = memo[num] + 1;
        } else {
            memo[num] = 1;
            result[0].push(num);
        }
    }
    return result;
};

const nums = [1,3,4,1,2,3,1];
console.log(findMatrix(nums));