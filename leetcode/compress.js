const findLastConsecutiveIdx = (val, startIdx, arr) => {
    if (startIdx > arr.length - 1) {
        return -1;
    }
    for (let i = startIdx; i < arr.length; i++) {
        if (val !== arr[i]) {
            if (i === startIdx) {
                return -1;
            } else {
                return i - 1;
            }
        } else {
            arr[i] = undefined;
        }
    }

    return arr.length - 1;
};

const compress = (chars) => {
    const length = chars.length;
    let i = 0;

    while (i < length) {
        let lastIdx = findLastConsecutiveIdx(chars[i], i + 1, chars);

        if (lastIdx !== -1) {
            let consecutives = lastIdx - i + 1;
            let consecutivesStr = consecutives.toString();

            for (let j = 0; j < consecutivesStr.length; j++) {
                chars[i + 1 + j] = consecutivesStr[j];
            }

            i = lastIdx + 1;
        } else {
            i++;
        }
    }

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === undefined) {
            chars.splice(i, 1);
            i--;
        }
    }
    return chars.length;
};