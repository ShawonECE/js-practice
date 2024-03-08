const plusOne = (digits) => {
    let array = [...digits];
    let length = array.length;
    let lastDigit = array[length - 1];
    if (lastDigit !== 9) {
        array[length - 1] = lastDigit + 1;
    } else {
        for (let i = length - 1; i >= 0; i--) {
            let digit = array[i];
            if (digit !== 9) {
                array[i] = digit + 1;
                break;
            } else {                
                array[i] = 0;
                if (i === 0) {
                    return [1, ...array];
                }
            }
        }
    }
    return array;
};

const digits = [9, 9, 9];
console.log(plusOne(digits));