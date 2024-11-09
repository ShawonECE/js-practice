const isPowerOfFour = (n) => {
    if (n === 1) {
        return true;
    }

    if (n % 4 !== 0 || n <= 0) {
        return false;
    } else {
        return isPowerOfFour(n / 4);
    }
};