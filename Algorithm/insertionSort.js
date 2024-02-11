const array = [8, 10, 1, 3, -6, 0, 5, 7, -25, 5, -84, -197, 56];

// By while loop
const insertionSort = (array) => {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let elementToInsert = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > elementToInsert) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = elementToInsert;
    }
};


// By for loop
// const insertionSort = (array) => {
//     let length = array.length;
//     for (let i = 1; i < length; i++) {
//         let elementToInsert = array[i];
//         let j;
//         for (j = i - 1; j >= 0 && array[j] > elementToInsert; j--) {
//             array[j + 1] = array[j];
//         }
//         array[j + 1] = elementToInsert;
//     }
//     return array;
// };

insertionSort(array);
console.log(array);