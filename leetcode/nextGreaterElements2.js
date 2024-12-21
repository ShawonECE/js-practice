const nextGreaterElements = (nums) => {
    const stack = [];
    const result = [];

    for (let i = 2*nums.length - 1; i >= 0; i--) {
        if (stack.length) {
            while (stack.length) {
                if (stack[stack.length - 1] > nums[i % nums.length]) {
                    if (i < nums.length) {
                        result[i % nums.length] = stack[stack.length - 1];
                    }
                    break;
                } else {
                    stack.pop();
                }
            }
        }

        stack.push(nums[i % nums.length]);
        if (!result[i % nums.length] && result[i % nums.length] != 0) {
            result[i % nums.length] = -1;
        }
    }

    return result;
};

const nums = [1,2,3,4,3];
console.log(nextGreaterElements(nums));