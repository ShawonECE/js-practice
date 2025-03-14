const generateParenthesis = (n) => {
    const result = [];

    const helper = (current, remaining, toBeClosed) => {
        if (remaining === 0 && toBeClosed === 0) {
            result.push(current);
            return;
        }

        if (remaining > 0) {
            helper(current + '(', remaining - 1, toBeClosed + 1);
        }

        if (toBeClosed > 0) {
            helper(current + ')', remaining, toBeClosed - 1);
        }
    };

    helper("", n, 0);
    return result;
};

const n = 3;
console.log(generateParenthesis(n));