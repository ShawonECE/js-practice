const extractLastDigit = (num) => {
    return [num % 10, Math.floor(num / 10)];
};

const isValid = (num) => {
    return num >= -(2**31) && num <= (2**31) - 1;
};

const constructNum = (prev, digit) => {
    return (prev * 10) + digit;
};

const reverse = (x) => {
    const negative = x < 0 ? true : false;
    let remain = Math.abs(x);
    let current = 0;
    let valid = true;

    while(valid && remain > 0) {
        const [a, b] = extractLastDigit(remain);
        current = constructNum(current, a);
        remain = b;
        valid = isValid(current);
    }

    if (negative && valid) {
        current = (-1) * current;
    }

    return valid ? current : 0;
};

const x = -120;
console.log(reverse(x));