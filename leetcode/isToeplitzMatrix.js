const isToeplitzMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const hasRowCol = (row, col) => row < rows && row >= 0 && col < cols && col >= 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (hasRowCol(i + 1, j + 1)) {
                if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                    return false;
                }
            }
        }
    }

    return true;
};

const matrix = [[1,2],[2,2]];
console.log(isToeplitzMatrix(matrix));