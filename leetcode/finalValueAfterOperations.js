const finalValueAfterOperations = (operations) => {
    let x = 0;
    for (const operation of operations) {
        if (operation === 'X++') {
            x++;
        } else if (operation === '++X') {
            x++;
        } else if (operation === 'X--') {
            x--;
        } else {
            x--;
        }
    }
    return x;
};