const list = [4, 45, 6, 12, 5, 1, 3, 9, 75, 65, 100, 4, 23, 10];

const sortAscending = (list) => {
    const array = [...list];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const sortDescending = (list) => {
    const array = [...list];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                const temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

const descendingList = sortDescending(list);
const ascendingList = sortAscending(list);

console.log(ascendingList);
console.log(descendingList);