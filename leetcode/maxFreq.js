const frequency = (array) => {
    const entries = {};
    for (const element of array) {
        if (entries[element]) {
            entries[element]++;
        } else {
            entries[element] = 1;
        }
    }
    return entries;
};

const maxFrequencyElements = (nums) => {
    const entries = frequency(nums);
    const frequencies = Object.values(entries);
    const maxFreq = Math.max(...frequencies);
    let count = 0;
    for (const element of frequencies) {
        if (element  === maxFreq) {
            count++;
        }
    }
    return count * maxFreq;
};

const array = [1,2,3,4,5];
console.log(maxFrequencyElements(array));