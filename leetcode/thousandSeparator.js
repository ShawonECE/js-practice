const thousandSeparator = (n) => {
    const string = n.toString();
    let result = "";
    let j = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        result = string[i] + result;
        j++;
        if (j % 3 === 0 && i !== 0) {
            result = "." + result;
        }
    }

    return result;
};

const n = 123456789;
console.log(thousandSeparator(n));