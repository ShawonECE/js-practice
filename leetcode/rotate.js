const rotate = (matrix) => {
    const rows = matrix.length;

    for (let i = 0; i < rows; i++) {
        for (let j = i + 1; j < rows; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < rows; i++) {
        matrix[i].reverse();
    }

    return matrix;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotate(matrix));