for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeter += 4;
            }
            
            if (hasRow(i+1)) {
                console.log(i+1);
                // if (grid[i+1][j] === 1) {
                //     perimeter -= 1;
                // }
            }

            if (hasRow(i-1)) {
                console.log(i-1);
                // if (grid[i-1][j] === 1) {
                //     perimeter -= 1;
                // }
            }

            if (hasCol(j-1)) {
                console.log(j-1);
                // if (grid[i][j-1] === 1) {
                //     perimeter -= 1;
                // }
            }

            if (hasCol(j+1)) {
                console.log(j+1);
                // if (grid[i][j+1] === 1) {
                //     perimeter -= 1;
                // }
            }
        }
    }

    return perimeter;