const gcd = (a, b) => {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

const findGCD = (nums) => {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    return gcd(max, min);
};