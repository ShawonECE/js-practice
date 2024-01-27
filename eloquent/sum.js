const sum = (start, end, step = 1) => {
    let result = 0;
    for (let i = start; i <= end; i = i + step) {
        result = result + i;
    }
    return result;
};

const rangeToArray = (start, end, step = 1) => {
    let array = [];
    if (step < 0) {
        if (start < end) {
            return 'invalid range';
        } else {
            for (let i = start; i >= end; i = i+step) {
                array.push(i);
            }
        }
    } else {
        if (start > end) {
            return 'invalid range';
        } else {
            for (let i = start; i <= end; i = i+step) {
                array.push(i);
            }
        }
    }
    return array;
};

console.log(rangeToArray(2, 40, 3));