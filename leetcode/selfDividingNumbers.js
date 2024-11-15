const isSelfDividing = (n) => {
    if (n < 10 && n > 0) {
        return true;
    }
    let current = n;
    while (current) {
        let digit = current % 10;
        current = Math.floor(current / 10);
        if (digit === 0) {
            return false;
        } else {
            if(n % digit !== 0) {
                return false;
            }
        }
    }
    return true;
};

const selfDividingNumbers = (left, right) => {
    const result = [];

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};

console.log(isSelfDividing(100));