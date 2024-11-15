const checkPerfectNumber = (num) => {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }

        if (sum > num) {
            return false;
        }
    }
    return sum === num;
};

console.log(checkPerfectNumber(7));