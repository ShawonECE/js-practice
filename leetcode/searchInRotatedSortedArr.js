const rotationPivot = (array) => {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        if (array[i] < array[i - 1]) {
            return i;
        }
    }
    return -1;
};

const search = (array, target) => {
    const pivot = rotationPivot(array);
    let start, end;
    if (pivot !== -1) {
        if(target >= array[pivot] && target <= array[array.length - 1]) {
            start = pivot;
            end = array.length - 1;
        } else {
            start = 0;
            end = pivot - 1;
        }
    } else {
        start = 0, end = array.length - 1;
    }

    while (start <= end) {
        let mid = Math.round((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (target < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

const array = [5, 1, 3];
console.log(search(array, 3));