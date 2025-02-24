const areSimilar = (mat, k) => {
    const rows = mat.length;
    const cols = mat[0].length;
    const shift = k % cols;
    const matCopy = Array(rows);

    for (let i = 0; i < rows; i++) {
        matCopy[i] = [...mat[i]];
    }

    for (let i = 0; i < rows; i++) {
        if (i % 2 === 0) {
            const part = mat[i].splice(0, shift);
            mat[i].splice(mat[i].length, 0, ...part);
        } else {
            const part = mat[i].splice(mat[i].length - shift, shift);
            mat[i].splice(0, 0, ...part);
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] !== matCopy[i][j]) {
                return false;
            }
        }
    }

    return true;
};

const mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4;
console.log(areSimilar(mat, k));