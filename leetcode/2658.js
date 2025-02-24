const findMaxFish = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = [];
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let maxCount = 0;

    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(false);
        visited.push(row);
    }

    const dfs = (row, col, count) => {
        visited[row][col] = true;
        count[0] += grid[row][col];

        for (let i = 0; i < 4; i++) {
            const currentRow = row + moves[i][0];
            const currentCol = col + moves[i][1];
            
            if(currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < cols && !visited[currentRow][currentCol] && grid[currentRow][currentCol] > 0) {
                dfs(currentRow, currentCol, count);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(!visited[i][j] && grid[i][j] > 0) {
                const count = [0];
                dfs(i, j, count);

                maxCount = Math.max(count[0], maxCount);
            }
        }
    }

    return maxCount;
};

const grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]];
console.log(findMaxFish(grid));