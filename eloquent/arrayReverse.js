const array = [2, 10, -5, 3, 0, 7, 4, -3];

const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

const reverseArrayInPlace = (array) => {
    // here the first solution
    // const newArray = [...array];
    // for (let i = 0; i < array.length; i++) {
    //     array[i] = newArray[array.length - 1 - i];
    // }

    // here the second & efficient solution
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
};

// console.log(reverseArray(array));
reverseArrayInPlace(array);
console.log(array);