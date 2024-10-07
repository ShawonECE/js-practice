const bitwiseComplement = (n) => {
    if (n === 0) {
        return 1;
    }
    let binStr = n.toString(2);
    let inverted = '';
    for(let bit of binStr) {
        if(bit === '1') {
            inverted += '0';
        } else {
            inverted += '1';
        }
    }
    return parseInt(inverted, 2);
};

console.log(bitwiseComplement(0));