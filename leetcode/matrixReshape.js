const matrixReshape = (mat, r, c) => {
    const reshaped = [];
    const rows = mat.length;
    const cols = mat[0].length;

    if (rows === r && cols === c || r*c !== rows*cols) {
        return mat;
    }
    
    let i = 0, j = 0;
    while (i < rows) {
        const oneDimIdx = cols*i + j;
        const newRow = Math.floor(oneDimIdx / c);
        const newCol = oneDimIdx % c;
        if (!reshaped[newRow]) {
            reshaped[newRow] = [];
        }
        reshaped[newRow][newCol] = mat[i][j];
        if (j === cols - 1) {
            j = 0;
            i++;
        } else {
            j++;
        }
    }
    return reshaped;
};

mat = [[1,2],[3,4]], r = 2, c = 4
console.log(matrixReshape(mat, r, c));