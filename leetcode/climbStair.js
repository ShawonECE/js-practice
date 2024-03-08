const factorial = (n) => {
    if (n < 0) {
        return NaN;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
};

const climbStairs = (n) => {
    let ways = 0;
    const maxTwos = Math.floor(n / 2);
    for (let i = 0; i <= maxTwos; i++) {
        const two = i;
        const one = n - 2 * i;
        if (two === 0 || one === 0) {
            ways++;
        } else {
            ways = ways + (factorial(one + two)/(factorial(one) * factorial(two)));
        }
    }
    return ways;
};

console.log(climbStairs(5));