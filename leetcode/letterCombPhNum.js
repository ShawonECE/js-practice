const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

const helper = (head, tail = '') => {
    const result = [];
    for (const letter of head) {
        if (tail) {
            for (const char of tail) {
                result.push(letter + char);
            }
        } else {
            result.push(letter);
        }
    }
    return result;
};

const letterCombinations = (digits) => {
    const stringArray = [];
    const length = digits.length;
    for (let i = length - 1; i >= 0; i--){
        stringArray.push(letters[digits[i]]);
    }

    if (!stringArray.length) {
        return [];
    }
    if (stringArray.length === 1) {
        return helper(stringArray[0]);
    }

    let combination = stringArray.pop();
    while (stringArray.length) {
        combination = helper(combination, stringArray.pop());
    }

    return combination;
};

console.log(letterCombinations('23'));