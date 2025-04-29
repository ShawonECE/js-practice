const arr = [4, 45, 6, 12, 5, 1, 3, 9, 75, 65, 100, 4, 23, 10];

const sortAscending = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

const sortDescending = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

sortDescending(arr);
console.log(descendingList);

sortAscending(arr);
console.log(ascendingList);