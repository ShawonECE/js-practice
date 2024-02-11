const array = [3, 5, 6, 45, 8, 12];

// Solution with time complexity O(n^2) and space complexity O(n)
// const sum = (array) => {
//     if (array.length === 0) {
//         return 0;
//     }
//     const rest = array.slice(1);
//     let total = array[0] + sum(rest);
//     return total;
// };


// Solution with time complexity O(n) and space complexity O(n)
const sum = (array, index = 0) => {
    if (array.length === index) {
        return 0;
    }
    let total = array[index] + sum(array, index + 1);
    return total;
}; 

console.log(sum(array));