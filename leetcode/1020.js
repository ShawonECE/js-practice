const numEnclaves = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let count = 0;
    
    const dfs = (srcRow, srcCol) => {
        visited[srcRow][srcCol] = true;
    
        for (const [ rowMove, colMove ] of moves) {
            const childRow = srcRow + rowMove;
            const childCol = srcCol + colMove;

            if (childRow >= 0 && childRow < rows && childCol >= 0 && childCol < cols && grid[childRow][childCol] === 1 && !visited[childRow][childCol]) {
                dfs(childRow, childCol);
            }
        }
    };

    for (let i = 0; i < cols; i++) {
        for (const j of [0, rows - 1]) {
            if(grid[j][i] === 1 && !visited[j][i]) {
                dfs(j, i);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (const j of [0, cols - 1]) {
            if(grid[i][j] === 1 && !visited[i][j]) {
                dfs(i, j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                count++;
            }
        }
    }

    return count;
};

const grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];
console.log(numEnclaves(grid));