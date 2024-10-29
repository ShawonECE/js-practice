const shiftGrid = (grid, k) => {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < k; r++) {
        const lastElement = grid[rows-1][cols-1];
        for (let i = rows - 1; i >= 0; i--) {
            for (let j = cols - 1; j >= 0; j--) {
                // console.log(i, j);
                if (j === 0) {
                    if (i === 0) {
                        grid[i][j] = lastElement;
                    } else {
                        grid[i][j] = grid[i-1][cols-1];
                    }
                } else {
                    grid[i][j] = grid[i][j-1];
                }
            }
        }
    }
    return grid;
};

const grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4;
console.log(shiftGrid(grid, k));