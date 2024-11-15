const isDigit = (char) => {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
};

const reformat = (s) => {
    const letters = [];
    const digits = [];
    let result = " ";

    for (const char of s) {
        if (isDigit(char)) {
            digits.push(char.toString());
        } else {
            letters.push(char);
        }
    }

    if (Math.abs(letters.length - digits.length) <= 1) {
        if (letters.length > digits.length) {
            result = result + letters.pop();
        } else if (letters.length < digits.length) {
            result = result + digits.pop();
        }

        while(letters.length || digits.length) {
            if (isDigit(result[result.length - 1])) {
                result = result + letters.pop();
            } else {
                result = result + digits.pop();
            }
        }
    }

    return result.trim();
};

const s = "1229857369";
console.log(reformat(s));