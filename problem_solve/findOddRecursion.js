const array = [1, 3, 6, 7, 2, 5, 9, 177, 25, 46, 8, 13, 11];

const findOddNumbers = (array) => {
    const result = [];

    const helper = (array, index = 0) => {
        if (index === array.length) {
            return;
        }
        if (array[index] % 2 !== 0) {
            result.push(array[index]);
        }
        helper(array, index + 1);
    };

    helper(array);
    return result;
};

console.log(findOddNumbers(array));