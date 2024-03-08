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

const sum = (array) => {
    let sum = array.reduce((a, b) => a + b, 0);
    return sum;
};

const combinationSum = (candidates, target) => {
    let result = [];
    let combination = [];
    let memo = {};

    const find = (current, history) => {
        let tempSum = sum(history) + current;
        if (tempSum === target) {
            history.push(current);
            let sortedHistory = mergeSort(history).toString();
            if (!memo[sortedHistory]) {
                result.push(history);
                memo[sortedHistory] = target;
            }
        } else if (tempSum > target) {
            history.pop();
            return;
        } else {
            
        }
    };
};

const candidates = [2, 5, 3];
const target = 8;
// console.log(combinationSum(candidates, target));
console.log(candidates.toString());