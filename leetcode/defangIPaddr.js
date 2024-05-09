const defangIPaddr = (address) => {
    let result = "";
    for (const char of address) {
        if (char === '.') {
            result += "[.]";
        } else {
            result += char;
        }
    }
    return result;
};

const address = "1.1.1.1";
console.log(defangIPaddr(address));