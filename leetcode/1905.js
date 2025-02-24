const countSubIslands = (grid1, grid2) => {
    const rows = grid2.length;
    const cols = grid2[0].length;
    const visited = [];
    const moves = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let count = 0;

    for (let i = 0; i < rows; i++) {
        const row = Array(cols).fill(false);
        visited.push(row);
    }

    const dfs = (row, col, allPresentInGrid1) => {
        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            const currentRow = row + moves[i][0];
            const currentCol = col + moves[i][1];
            
            if(currentRow >= 0 && currentRow < rows && currentCol >= 0 && currentCol < cols && !visited[currentRow][currentCol] && grid2[currentRow][currentCol] === 1) {
                if (grid1[currentRow][currentCol] !== 1) {
                    allPresentInGrid1[0] = false;
                }
              dfs(currentRow, currentCol, allPresentInGrid1);
            }
        }
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if(!visited[i][j] && grid2[i][j] === 1 && grid1[i][j] === 1) {
                const allPresentInGrid1 = [true];
                dfs(i, j, allPresentInGrid1);

                if (allPresentInGrid1[0]) {
                    count++;
                }
            }
        }
    }

    return count;
};