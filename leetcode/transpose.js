const transpose = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transpose = [];

    for (let i = 0; i < cols; i++) {
        const newRow = [];
        for (let j = 0; j < rows; j++) {
            // console.log(j, i);
            newRow.push(matrix[j][i]);
        }
        transpose.push(newRow);
    }
    return transpose;
};

const matrix = [[1,2,3],[4,5,6]];
console.log(transpose(matrix));