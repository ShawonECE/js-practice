function sum(...args) {
    let total = args.reduce((accumulator, current) => accumulator + current, 0);
    return total;
};

function memoize(func) {
    const cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = func(...args);
            cache.set(key, result);
            return result;
        }
    }
}

const memoSum = memoize(sum);

console.log(memoSum(1, 27, 10, 100));
console.log(memoSum(1, 27, 10, 100));
