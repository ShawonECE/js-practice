const mergeSort = (array, order = 0) => {
    let length = array.length;
    if (length < 2) {
        return array;
    }
    let mid = Math.floor(length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return merge(mergeSort(leftArray, order), mergeSort(rightArray, order), order);
};

const merge = (leftArray, rightArray, order) => {
    const sortedArray = [];
    if (order === 0) {
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        }
    } else {
        while (leftArray.length && rightArray.length) {
            if (leftArray[0] >= rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        }
    }
    
    return [...sortedArray, ...leftArray, ...rightArray];
};

const frequencySort = (nums) => {
    const memo = {};
    const sorted = [];
    for (const num of nums) {
        if (!memo[num]) {
            memo[num] = 0;
        }
        memo[num] = memo[num] + 1;
    }
    const frequencies = new Set(mergeSort(Object.values(memo)));

    for (const freq of frequencies) {
        let keys = [];
        for (const key in memo) {
            if (memo[key] === freq) {
                keys.push(parseInt(key));
            }
        }
        keys = mergeSort(keys, 1);
        for (const key of keys) {
            for (let i = 0; i < freq; i++) {
                sorted.push(key);
            }
            delete memo[key];
        }
    }
    return sorted;
};

const array = [8,-8,2,-8,-5,-3];
console.log(frequencySort(array));

// console.log(mergeSort([8, -5, 2, -3], 1));