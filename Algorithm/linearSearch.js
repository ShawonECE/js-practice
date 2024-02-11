const array = [90, -2, 6, 47, -3, 5, 57];

const linearSearch = (array, item) => {
    const length = array.length;
    for (let index = 0; index < length; index++) {
        if (array[index] === item) {
            return `${item} is at ${index}`;
        }
    }
    return 'not found';
};

console.log(linearSearch(array, 47));