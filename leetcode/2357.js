const minimumOperations = nums => {
    const nonZeros = nums.filter(num => num !== 0);
    const set = new Set(nonZeros);

    return set.size;
};