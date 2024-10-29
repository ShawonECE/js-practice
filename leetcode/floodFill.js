const floodFill = (image, sr, sc, color) => {
    const rows = image.length;
    const cols = image[0].length;
    const startingPixelColor = image[sr][sc];

    const hasRow = (row) => row < rows && row >= 0;
    const hasCol = (col) => col < cols && col >= 0;

    const updateColor = (row, col) => {
        if (image[row][col] === color || image[row][col] !== startingPixelColor) {
            return;
        } else {
            image[row][col] = color;

            if (hasRow(row + 1)) {
                updateColor(row + 1, col);
            }

            if (hasRow(row - 1)) {
                updateColor(row - 1, col);
            }

            if (hasCol(col + 1)) {
                updateColor(row, col + 1);
            }

            if (hasCol(col - 1)) {
                updateColor(row, col - 1);
            }
        }
    };

    updateColor(sr, sc);
    return image;
};

const image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0;
console.log(floodFill(image, sr, sc, color));