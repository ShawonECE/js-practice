// const distributeBetweenTwo = (n, limit) => {
//     let ways = 0;
//     if (n === 0) {
//         return 0;
//     }
//     for (let i = Math.min(n, limit); i >= 0 ; i--) {
//         if (i > n - i) {
//             ways += 2;
//         } else if (i === n - i) {
//             ways += 1;
//             return ways;
//         } else {
//             return ways;
//         }
//     }
// };

// console.log(distributeBetweenTwo(3, 2));

const distributeCandies = (n, limit) => {
    if (n > 3 * limit) {
        return 0;
    }
    let ways = 0;
    for (let i = Math.min(limit, n); i >= 0; i--) {
        for (let j = Math.min(limit, n - i); j >= 0; j--) {
            if (n - i - j >= 0 && n - i - j <= limit) {
                ways++;
            }
        }
    }
    return ways;
};

console.log(distributeCandies(5, 2));