const numberOfOnes = (string) => {
    let count = 0;
    for (const char of string) {
        if (char === '1') {
            count++;
        }
    }
    return count;
};

const numberOfBeams = (bank) => {
    const arr = [];
    for (const row of bank) {
        let ones = numberOfOnes(row);
        if (ones) {
            arr.push(ones);
        }
    }
    const length = arr.length;
    let beams = 0;
    for (let i = 0; i < length - 1; i++) {
        beams = beams + arr[i] * arr[i + 1];
    }
    return beams;
};

const bank = ["000","111","000"];
console.log(numberOfBeams(bank));