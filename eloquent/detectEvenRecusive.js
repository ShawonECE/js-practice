const number = 321;

const isEven = (n) => {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n-2);
    }
}

console.log(isEven(number));