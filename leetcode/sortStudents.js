let score = [[3,4],[5,6]];
let k = 0;

const sortTheStudents = (array, k) => {
    let length = array.length;
    if (length < 2) {
        return array;
    }
    let mid = Math.floor(length / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid);
    return merge(sortTheStudents(leftArray, k), sortTheStudents(rightArray, k), k);
};

const merge = (leftArray, rightArray, k) => {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        if (leftArray[0][k] >= rightArray[0][k]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(mergeSort(score, k));