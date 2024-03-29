const restoreMatrix = (rowSum, colSum) => {
    const rows = rowSum.length;
    const cols = colSum.length;
    let result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
        for (let j = 0; j < cols; j++) {
            const current = Math.min(rowSum[i], colSum[j]);
            row.push(current);
            rowSum[i] = rowSum[i] - current;
            colSum[j] = colSum[j] - current;
        }
        result.push(row);
    }
    return result;
};

const rowSum = [5,7,10], colSum = [8,6,8];
console.log(restoreMatrix(rowSum, colSum));