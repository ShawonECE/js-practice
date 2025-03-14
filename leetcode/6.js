const convert = (s, numRows) => {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }
    const zigzag = Array(numRows).fill("");
    let currentRow = 0;
    let direction = 1;

    for (const char of s) {
        zigzag[currentRow] += char;

        if (currentRow === 0) {
            direction = 1;
        } else if (currentRow === numRows - 1) {
            direction = -1;
        }

        currentRow += direction;
    }

    return zigzag.join("");
};