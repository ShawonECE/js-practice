const every = (array, test) => {
    let result = true;
    for (let item of array) {
        // Here is two methods
        // result = result && test(item);
        if(!test(item)) {
            return false;
        }
    }
    return result;
};

const everyUsingSome = (array, test) => {
    let result = true;
    if (array.some(item => !test(item))) {
        result = false;
    }
    return result;
};

const array = [1, 2, 3, 4, 5, 6 , 7, 8, 9];

console.log(every(array, n => n > 5));
console.log(everyUsingSome(array, n => n > 5));