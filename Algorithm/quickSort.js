// const quickSort = (array) => {
//     let length = array.length;
//     if (length <= 1) {
//         return array;
//     }

//     let pivot = array[0], left = [], right = [];
//     for (let i = 1; i < length; i++) {
//         if (array[i] < pivot) {
//             left.push(array[i]);
//         } else {
//             right.push(array[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// };


const partition = (arr, left, right) => {
    const pivot = arr[right]; // Pick rightmost element as pivot
    let i = left - 1;         // Place for swapping

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // Place pivot in correct position
    return i + 1; // Return pivot index
};


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
        return; // Base case: no need to sort
    }

    const pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);  // Sort left part
    quickSort(arr, pivotIndex + 1, right); // Sort right part
};

const arr = [5, 3, 8, 4, 2, 7, 1, 10];
quickSort(arr);
console.log(arr);


