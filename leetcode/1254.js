const closedIsland = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = [];
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let count = 0;

    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(false);
        visited.push(row);
    }

    const isPeripheral = (row, col) => {
        if (row === 0 || row === rows - 1 || col === 0 || col === cols - 1) {
            return true;
        } else {
            return false;
        }
    };

    const dfs = (row, col, peripheral) => {
        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            const currentRow = row + moves[i][0];
            const currentCol = col + moves[i][1];
            
            if(currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < cols && !visited[currentRow][currentCol] && grid[currentRow][currentCol] === 0) {
                if (isPeripheral(currentRow, currentCol)) {
                    peripheral[0] = true;
                }
              dfs(currentRow, currentCol, peripheral);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(!visited[i][j] && grid[i][j] === 0 && !isPeripheral(i, j)) {
                const peripheral = [false];
                dfs(i, j, peripheral);

                if (!peripheral[0]) {
                    count++;
                }
            }
        }
    }

    return count;
};