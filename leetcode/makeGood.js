const makeGood = function(s) {
    const length = s.length;
    let str = '';
    let i = 0;
    while ( i < length ) {
        if (i === length - 1) {
            str = str + s[i];
            break;
        }
        if (s.charCodeAt(i) - s.charCodeAt(i + 1) === 32 || s.charCodeAt(i) - s.charCodeAt(i + 1) === -32) {
            i = i + 2;
        } else {
            str = str + s[i];
            i++;
        }
    }
    return str === s ? str : makeGood(str);
};

s = "l";
console.log(makeGood(s));
