const generate = (numRows) => {
    const res = [[1]];

    if (numRows === 1) {
        return res;
    }

    for (let i = 1; i < numRows; i++) {
        res[i] = [1];

        for (let j = 0; j < i - 1; j++) {
            res[i].push(res[i - 1][j] + res[i - 1][j + 1]);
        }

        res[i].push(1);
    }

    return res;
};

const numRows = 5;
console.log(generate(numRows));