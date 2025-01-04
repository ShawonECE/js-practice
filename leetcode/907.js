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

const sumSubarrayMins = (arr) => {
    const left = prevSmallerDistance(arr);
    const right = nextSmallerDistance(arr);

    let sum = 0;
    const mod = 7 + 10**9;
    for (let i = 0; i < arr.length; i++) {
        sum = (sum + arr[i]*left[i]*right[i]) % mod;
    }

    return sum;
};

const arr = [1, 1];
console.log(sumSubarrayMins(arr));