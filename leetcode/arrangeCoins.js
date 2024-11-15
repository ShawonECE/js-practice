// const arrangeCoins = (n) => {
//     let i = 1;
//     while (i <= n) {
//         n = n - i;
//         i++;
//     }
//     return i - 1;
// };

// binary search
const arrangeCoins = (n) => {
    let i = 0;
    let j = n;
    while (i <= j) {
        let mid = Math.floor((i + j) / 2);
        if (mid*(mid + 1) / 2 === n) {
            return mid;
        } else if (mid*(mid + 1) / 2 > n) {
            if (mid*(mid - 1) / 2 < n) {
                return mid - 1;
            }
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
};

console.log(arrangeCoins(8));