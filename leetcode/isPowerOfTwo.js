const isPowerOfTwo = (n) => {
    if (n === 1) {
        return true;
    }

    if (n % 2 !== 0 || n <= 0) {
        return false;
    } else {
        return isPowerOfTwo(n / 2);
    }
};

//alternative

// const isPowerOfTwo = (n) => {
//     return n > 0 && (n & (n - 1)) === 0;
// };