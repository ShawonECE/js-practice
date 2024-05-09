const toLowerCase = (s) => {
    let result = '';
    for (const char of s) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            code = code + 32;
            let newChar = String.fromCharCode(code);
            result += newChar;
        } else {
            result += char;
        }
    }
    return result;
};

const s = "LOVELY";
console.log(toLowerCase(s));