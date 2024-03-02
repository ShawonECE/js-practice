const values = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

const intToRoman = (number) => {
    let roman = '';
    const helper = (number) => {
        let repeat, remainder, char;
        if (number < 1) {
            return;
        }
        if (number >= 1000) {
            repeat = Math.floor(number / 1000);
            remainder = number % 1000;
            char = 'M';
        } else if (number >= 500) {
            if (number >=900) {
                char = 'CM'
                remainder = number % 900;
            } else {
                char = 'D'
                remainder = number % 500;
            }
            repeat = 1;
        } else if (number >= 100) {
            if (number >= 400) {
                char = 'CD';
                remainder = number % 400;
                repeat = 1;
            } else {
                char = 'C';
                repeat = Math.floor(number / 100);
                remainder = number % 100;
            }
        } else if (number >= 50) {
            if (number >= 90) {
                char = 'XC';
                remainder = number % 90;
            } else {
                char = 'L';
                remainder = number % 50;
            }
            repeat = 1;
        } else if (number >= 10) {
            if (number >= 40) {
                char = 'XL';
                repeat = 1;
                remainder = number % 40;
            } else {
                char = 'X';
                repeat = Math.floor(number / 10);
                remainder = number % 10;
            }
        } else if (number >= 5) {
            if (number === 9) {
                char = 'IX';
                remainder = 0;
            } else {
                char = 'V';
                remainder = number % 5;
            }
            repeat = 1;
        } else {
            if (number === 4) {
                char = 'IV';
                repeat = 1;
            } else {
                char = 'I';
                repeat = number;
            }
            remainder = 0;
        }

        for (let i = 0; i < repeat; i++) {
            roman = roman + char;
        }
        helper(remainder);
    };
    helper(number);
    return roman;
};

console.log(intToRoman(58));