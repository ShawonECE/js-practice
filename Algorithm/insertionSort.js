const insertionSort = (array) => {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let elementToInsert = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > elementToInsert) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = elementToInsert;
    }
};

const array = [8, 10, 1, 3, -6, 0, 5, 7, -25, 5, -84, -197, 56];
insertionSort(array);
console.log(array);