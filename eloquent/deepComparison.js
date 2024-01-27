const shawon = {
    age: 26,
    result: [5, 5, 2.9]
};

const nipun = {
    result: [5, 5, 2.7],
    age: 26
};

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

const isObject = object => {
    if (object === null) {
        return false;
    } else {
        return (typeof object === 'object' && object.length === undefined);
    }
};

const isArray = object => {
    if (object === null) {
        return false;
    } else {
        return (typeof object === 'object' && object.length > -1);
    }
};

const isEqualArray = (array1, array2) => {
    if (array1 === null || array2 === null || typeof array1 != 'object' || typeof array2 != 'object' || array1.length != array2.length) {
        return false;
    } else {
        let result = true;
        for (let i = 0; i < array1.length; i++) {
            result = result && (array2.includes(array1[i]))
        }
        return result;
    }
};

// find equal object along with nested objects
const isEqualObject = (object1, object2) => {
    if (object1 === object2) {
        return true;
    } else if (object1 === null || object2 === null || typeof object1 != 'object' || typeof object2 != 'object') {
        return false;
    } else {
        let keys1 = Object.keys(object1);
        let keys2 = Object.keys(object2);
        if(isEqualArray(keys1, keys2)) {
            result = true;
            for(let key of keys1) {
                result = result && isEqualObject(object1[key], object2[key]);
            }
            return result;
        } else {
            return false;
        }
    }
};

// console.log(isArray([1, 2, 3]));
console.log(isEqualObject(shawon, nipun));