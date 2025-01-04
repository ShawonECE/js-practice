const maxChunksToSorted = (arr) => {
    const n = arr.length;
    let sum = 0;
    let chunks = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (((i*(i + 1)) / 2) === sum) {
            chunks++;
        }
    }

    return chunks;
};

const arr = [1,0,2,3,4];
console.log(maxChunksToSorted(arr));