const sumBase = (n, k) => {
    let sum = 0, quotient = n;
    while (quotient !== 0) {
        sum = sum + quotient % k;
        quotient = Math.floor(quotient / k);
    }
    return sum;
};

const n = 10, k = 10;
console.log(sumBase(n, k));