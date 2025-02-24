const maxAreaOfIsland = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = [];
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let maxSize = 0;

    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(false);
        visited.push(row);
    }

    const dfs = (row, col, nodeCount) => {
        visited[row][col] = true;
        nodeCount[0]++;

        for (let i = 0; i < 4; i++) {
            const currentRow = row + moves[i][0];
            const currentCol = col + moves[i][1];
            
            if(currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < cols && !visited[currentRow][currentCol] && grid[currentRow][currentCol] === 1) {
              dfs(currentRow, currentCol, nodeCount);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(!visited[i][j] && grid[i][j] === 1) {
                const nodeCount = [0];
                dfs(i, j, nodeCount);
                maxSize = Math.max(maxSize, nodeCount[0]);
            }
        }
    }

    return maxSize;

};

const grid = [[0,0,0,0,0,0,0,0]];
console.log(maxAreaOfIsland(grid));