const mergeSort = (array) => {
    let length = array.length;
    if (length < 2) {
        return array;
    }
    let mid = Math.floor(length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
};

const minimumDifference = (nums, k) => {
    if (k === 1) {
        return 0;
    }

    const sorted = mergeSort(nums);
    
    let diff = Infinity;
    for (let i = 0; i <= sorted.length - k; i++) {
        diff = Math.min(sorted[i + k - 1] - sorted[i], diff);
        if (diff === 0) {
            return diff;
        }
    }
    return diff;
};

const nums = [87063,61094,44530,21297,95857,93551,9918], k = 6;
console.log(minimumDifference(nums, k));
