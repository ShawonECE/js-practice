const isSorted = (array) => {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        if (array[i] < array[i - 1]) {
            return [false, i];
        }
    }
    return [true, -1];
};

const check = (array) => {
    const res = isSorted(array);
    const position = res[1];
    if (res[0]) {
        return true;
    } else {
        const left = array.slice(0, position);
        const right = array.slice(position);
        const newArray = [...right, ...left];
        return isSorted(newArray)[0];
    }
};

const array = [2,1,3,4];
console.log(check(array));