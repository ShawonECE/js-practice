const gridSize = 15;

for (let i = 1; i <= gridSize; i++) {
    let string = '';
    if (i % 2 !== 0) {
        for (let j = 1; j <= gridSize; j++) {
            if (j % 2 !== 0) {
                string = string + '   ';
            }
            else {
                string = string + '###';
            }
        }
        console.log(string);
    }
    else {
        for (let j = 1; j <= gridSize; j++) {
            if (j % 2 !== 0) {
                string = string + '###';
            }
            else {
                string = string + '   ';
            }
        }
        console.log(string);
    }
}
