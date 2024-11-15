// const tribonacci = (n) => {
//     const arr = [0, 1, 1];
//     if (n > 2) {
//         for (let i = 3; i <= n; i++) {
//             arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
//         }
//     }
//     return arr[n];
// };

//alternate
const tribonacci = (n) => {
    const arr = [0, 1, 1];
    if (n < 3) {
        return arr[n];
    }

    for (let i = 3; i <= n; i++) {
        arr.push(arr[0] + arr[1] + arr[2]);
        arr.shift();
    }
    return arr[2];
};

console.log(tribonacci(25));