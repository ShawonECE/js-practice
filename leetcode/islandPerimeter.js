const islandPerimeter = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;

    const hasRow = (row) => row < rows && row >= 0;
    const hasCol = (col) => col < cols && col >= 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;

                if (hasRow(i+1)) {
                    if (grid[i+1][j] === 1) {
                        perimeter -= 1;
                    }
                }
    
                if (hasRow(i-1)) {
                    if (grid[i-1][j] === 1) {
                        perimeter -= 1;
                    }
                }
    
                if (hasCol(j-1)) {
                    if (grid[i][j-1] === 1) {
                        perimeter -= 1;
                    }
                }
    
                if (hasCol(j+1)) {
                    if (grid[i][j+1] === 1) {
                        perimeter -= 1;
                    }
                }
            }
        }
    }

    return perimeter;
};

grid = [[1, 0]];
console.log(islandPerimeter(grid));