const numIslands = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = [];
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let count = 0;

    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(false);
        visited.push(row);
    }

    const dfs = (row, col) => {
        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            const currentRow = row + moves[i][0];
            const currentCol = col + moves[i][1];
            
            if(currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < cols && !visited[currentRow][currentCol] && grid[currentRow][currentCol] === '1') {
              dfs(currentRow, currentCol);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(!visited[i][j] && grid[i][j] === '1') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(grid));