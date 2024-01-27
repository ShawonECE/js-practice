const countB = (string) => {
    // let count = 0;
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] === 'B') {
    //         count++;
    //     }
    // }
    // return count;

    return countChar(string, 'B');
};

const countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
};

console.log(countB('BbalB'));
// console.log(countChar('Shawon', 'w'));