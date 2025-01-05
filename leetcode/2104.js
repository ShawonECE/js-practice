const nextSmallerDistance = (arr) => {
    const stack = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr.length - i;
    }

    for (let i = 0; i < arr.length; i++) {
        while(stack.length && arr[i] <= stack[stack.length - 1].value) {
            let current = stack.pop();
            result[current.pos] = i - current.pos;
        }

        stack.push({value: arr[i], pos: i});
    }

    return result;
};

const prevSmallerDistance = (arr) => {
    const stack = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = i + 1;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        while(stack.length && arr[i] < stack[stack.length - 1].value) {
            let current = stack.pop();
            result[current.pos] = current.pos - i;
        }

        stack.push({value: arr[i], pos: i});
    }

    return result;
};

const nextLargerDistance = (arr) => {
    const stack = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr.length - i;
    }

    for (let i = 0; i < arr.length; i++) {
        while(stack.length && arr[i] >= stack[stack.length - 1].value) {
            let current = stack.pop();
            result[current.pos] = i - current.pos;
        }

        stack.push({value: arr[i], pos: i});
    }

    return result;
};

const prevLargerDistance = (arr) => {
    const stack = [];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = i + 1;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        while(stack.length && arr[i] > stack[stack.length - 1].value) {
            let current = stack.pop();
            result[current.pos] = current.pos - i;
        }

        stack.push({value: arr[i], pos: i});
    }

    return result;
};

const subArrayRanges = (nums) => {
    let sum = 0;
    const minLeft = prevSmallerDistance(nums);
    const minRight = nextSmallerDistance(nums);
    const maxLeft = prevLargerDistance(nums);
    const maxRight = nextLargerDistance(nums);

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]*maxLeft[i]*maxRight[i] - nums[i]*minLeft[i]*minRight[i];
    }

    return sum;
};

const nums = [4,-2,-3,4,1];
console.log(subArrayRanges(nums));