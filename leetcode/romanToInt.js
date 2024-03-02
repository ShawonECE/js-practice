const roman = 'CMXCIX';
const values = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

// const romanToInt = (string) => {
//     const length = string.length;
//     let integer = 0;
//     let char, value, nextChar, nextValue;

//     for (let i = 0; i < length; i++) {
//         char = string[i];
//         value = values[char];
//         if (i === length - 1 ) {
//             integer = integer + value;
//             return integer;
//         }
//         nextChar = string[i + 1];
//         nextValue = values[nextChar];
//         if (nextValue === value*5 || nextValue === value*10) {
//             integer = integer - value;
//         } else {
//             integer = integer + value;
//         }
//     }
// };

const romanToInt = (string) => {
    const length = string.length;
    let integer = 0, i = 0;
    let char, value, nextChar, nextValue;

    while (i < length) {
        char = string[i];
        value = values[char];
        if (i === length - 1 ) {
            integer = integer + value;
            return integer;
        }
        nextChar = string[i + 1];
        nextValue = values[nextChar];
        if (nextValue === value*5 || nextValue === value*10) {
            integer = integer - value + nextValue;
            i = i + 2;
        } else {
            integer = integer + value;
            i = i + 1;
        }
    }
    return integer;
};

console.log(romanToInt('CMXCX'));