const string = 'Madamimadammat Mohammed';

const charCountTotal = (str) => {
    const result = {};
    str = str.toLowerCase();
    str = str.split(' ').join('');

    for (let char of str) {
        if (!result[char]) {
            result[char] = 1;
        } else {
            result[char]++;
        } 
    }

    return result;
};

console.log(charCountTotal(string));