const isDivisor = (sub, str) => {
    const subLength = sub.length;
    const strLength = str.length;

    if (strLength % subLength !== 0) {
        return false;
    } else {
        const reps = strLength / subLength;
        let s = "";
        for (let i = 0; i < reps; i++) {
            s += sub;
        }
        return s === str;
    }
};

const gcdOfStrings = (str1, str2) => {
    let gcd = "";
    const minLength = Math.min(str1.length, str2.length);

    for (let i = 0; i < minLength; i++) {
        if (str1.slice(0, i + 1) !== str2.slice(0, i + 1)) {
            return gcd;
        }

        const prefix = str1.slice(0, i + 1);

        if (isDivisor(prefix, str1) && isDivisor(prefix, str2)) {
            gcd = prefix;
        }
    }

    return gcd;
};

const str1 = "LEET", str2 = "CODE";
console.log(gcdOfStrings(str1, str2));