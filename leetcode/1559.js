const containsCycle = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const parent = Array.from({ length: rows }, () => Array.from({ length: cols }, () => [-1, -1]));
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let cycle = false;

    const dfs = (row, col, char) => {
        if (cycle) return;
        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            const childRow = row + moves[i][0];
            const childCol = col + moves[i][1];

            if (childRow >= 0 && childRow < rows && childCol >= 0 && childCol < cols && visited[childRow][childCol] && parent[row][col][0] !== childRow && parent[row][col][1] !== childCol && grid[childRow][childCol] === char) {
                cycle = true;
            }
            
            if(childRow >= 0 && childRow < rows && childCol >= 0 && childCol < cols && !visited[childRow][childCol] && grid[childRow][childCol] === char) {
                parent[childRow][childCol] = [row, col];
                dfs(childRow, childCol, char);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && !cycle) {
                dfs(i, j, grid[i][j]);
            }
        }
    }

    return cycle;
};

const grid = [["a","b","b"],["b","z","b"],["b","b","a"]];
console.log(containsCycle(grid));