const grid = [[10]];

const deleteGreatestValue = (grid) => {
    let answer = 0;
    let maxValues;
    const cols = grid[0].length;
    
    for (let i = 0; i < cols; i++) {
        maxValues = [];
        for (const row of grid) {
            let max = Math.max(...row);
            maxValues.push(max);
            let maxIndex = row.indexOf(max);
            row.splice(maxIndex, 1);
        }
        answer = answer + Math.max(...maxValues);
    }
    return answer;
};

console.log(deleteGreatestValue(grid));
