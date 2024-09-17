let myArray = [54, 26, 93, 17, 77, 31, 44, 55, 20];

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

console.log(mergeSort(myArray));