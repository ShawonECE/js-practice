const splitZero = (array) => {
    let start = 0;
    const result = [];
    const length = array.length;
    i = 0;
    while (i < length) {
        let sub = [];
        let init = i;
        for (let j = init; j < length; j++) {
            if (array[j] === 0) {
                i = j + 1;
                break;
            } else {
                sub.push(array[j]);
                i++;
            }
        }
        sub.length && result.push(sub);
    }
    return result;
};

const negativeCounter = (array) => {
    let count = 0;
    const length = array.length;
    for (const num of array) {
        if (num < 0) {
            count++;
        }
    }
    return count;
};

const firstNegativeIdx = (array) => {
    let idx;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < 0) {
            idx = i;
            break;
        }
    }
    return idx;
};

const lastNegativeIdx = (array) => {
    let idx;
    const length = array.length;
    for (let i = length - 1; i >= 0; i--) {
        if (array[i] < 0) {
            idx = i;
            break;
        }
    }
    return idx;
};

const maxProduct = (nums) => {
    const splits = splitZero(nums);
    const products = [];
    if (nums.includes(0)) {
        products.push(0);
    }
    for (const split of splits) {
        let negatives = negativeCounter(split);
        if (negatives % 2 === 0) {
            products.push(split.reduce((a, b) => a * b, 1));
        } else {
            const firstNegative = firstNegativeIdx(split);
            const lastNegative = lastNegativeIdx(split);
            let sub1 = [];
            let sub2 = [];
            let product1, product2;
            if (negatives === 1) {
                if (split.length === 1) {
                    products.push(split[0]);
                } else {
                    sub1 = split.slice(0, firstNegative);
                    sub2 = split.slice(firstNegative + 1);
                }
            } else {
                sub1 = split.slice(0, lastNegative);
                sub2 = split.slice(firstNegative + 1);
            }
            product1 = sub1.length ? sub1.reduce((a, b) => a * b, 1) : -Infinity;
            product2 = sub2.length ? sub2.reduce((a, b) => a * b, 1) : -Infinity;
            products.push(Math.max(product1, product2));
        }
    }
    return Math.max(...products);
};

const nums = [-2, 0];
console.log(maxProduct(nums));