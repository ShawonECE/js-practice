const array1 = [2, 3, 3];
const array2 = [2, 3, 3];

// solution with time complexity O(n^2)
// const squareCheck = (array1, array2) => {
//     if (array1.length === array2.length) {
//         for (let element of array1) {
//             if (!array2.includes(element**2)) {
//                 return false;
//             }
//         }
//         for (let element of array2) {
//             if (!array1.includes(Math.sqrt(element))) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// };


// solution with time complexity O(n)
const squareCheck = (array1, array2) => {
    let set1 = new Set(array1);
    let set2 = new Set(array2);

    if (array1.length === array2.length && set1.size === set2.size) {
        for (let value of set1.values()) {
            if(!set2.has(value**2)) {
                return false;
            };
        }
        return true;
    }
    return false;
};

console.log(squareCheck(array1, array2));