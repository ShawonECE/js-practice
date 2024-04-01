const productExceptSelf = (nums) => {
    const length = nums.length;
    const result = [];
    let product = 1;
    for (let i = 0; i < length; i++) {
        if (i !== 0) {
            product = product * nums[i - 1];
        }
        result.push(product);
    }
    product = 1;
    let current;
    for (let i = length - 1; i >= 0; i--) {
        if (i !== length - 1) {
            product = product * nums[i + 1];
        }
        current = result[i] * product;
        if (current === -0) {
            current = 0;
        }
        result[i] = current;
    }
    return result;
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));