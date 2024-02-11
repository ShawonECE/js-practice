let myArray = [2, 68, -5, 1, -6, 40, -5, 2];

const quickSort = (array) => {
    let length = array.length;
    if (length <= 1) {
        return array;
    }

    let pivot = array[0], left = [], right = [];
    for (let i = 1; i < length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

myArray = quickSort(myArray);
console.log(myArray);

