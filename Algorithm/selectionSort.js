// time complexity is O(n^2)
const selectionSort = (array) => {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]; // swap
        }
    }
};

const array = [8, 10, 1, 3, -6, 0, 5, 7, -25, 5, -84, -197, 56];
selectionSort(array);
console.log(array);