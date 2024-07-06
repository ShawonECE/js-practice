const maximumOddBinaryNumber = (s) => {
    const length = s.length;
    let ones = 0;
    for (const bit of s) {
        if (parseInt(bit) === 1) {
            ones++;
        }
    }
    const zeros = length - ones;
    let first = '';
    let last = '';
    if (ones > 1) {
        for (let i = 1; i < ones; i++) {
            first += '1';
        }
    }

    if (zeros) {
        for (let i = 0; i < zeros; i++) {
            last += '0';
        }
    }

    return `${first}${last}1`;
};

const s = "0101";
console.log(maximumOddBinaryNumber(s));