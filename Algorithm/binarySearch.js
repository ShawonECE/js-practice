const array = [1, 20, 26, 27, 30, 45, 50, 87]; // array needs to be in ascending order

const binarySearch = (array, element) => {
    let start = 0, end = array.length - 1;

    while (start <= end) {
        let mid = Math.round((start + end) / 2);

        if (array[mid] === element) {
            return `${element} is at index ${mid}`;
        } else if (element < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return `Element not found`;
};

console.log(binarySearch(array, 50));