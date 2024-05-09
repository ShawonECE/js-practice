const diStringMatch = (s) => {
    const result = [];
    let dec = s.length;
    let inc = 0;
    for (const char of s) {
        if (char === 'I') {
            result.push(inc);
            inc++;
        } else {
            result.push(dec);
            dec--;
        }
    }
    result.push(inc);
    return result;
};

const s = "DDI";
console.log(diStringMatch(s));