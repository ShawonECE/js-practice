const fibonacciSeries = (size) => {
    const result = [];

    const helper = (size, index = 0) => {
        if (index === size) {
            return;
        }

        if (index < 2) {
            result.push(index);
        } else {
            result.push(result[index - 1] + result[index - 2]);
        }

        helper(size, index + 1);
    };

    helper(size);
    return result;
};

const fibonacciNthElement = (n) => {
    return fibonacciSeries(n)[n - 1];
};

console.log(fibonacciSeries(12));
console.log(fibonacciNthElement(10));