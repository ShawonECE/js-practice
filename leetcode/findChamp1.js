const findChampion = (grid) => {
    const length = grid.length;
    let i = 0;
    let j = 1;
    let champ = 0;

    while (i < length && j < length) {
        if (grid[i][j] !== 1) {
            champ = j;
            i = j;
        }
        j++;
    }
    return champ;
};

const grid = [[0,0,1],[1,0,1],[0,0,0]];
console.log(findChampion(grid));