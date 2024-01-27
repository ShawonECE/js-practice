const loop = (initialValue, test, update, body) => {
    while (test(initialValue)) {
        body(initialValue);
        initialValue = update(initialValue);
    }
};

const summation = (start, end) => {
    let total = 0;
    loop(start, i => i <= end, i => i + 1, i => total = total + i);
    return total;
};

const multiplication = (start, end) => {
    let total = 1;
    loop(start, i => i <= end, i => i = i + 1, i => total = total * i);
    return total;
};

console.log(summation(1, 100));
console.log(multiplication(1, 10));