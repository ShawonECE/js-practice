const minimum = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    } else if (num1 === num2) {
        return 'They are equal';
    } else {
        return num2;
    }
}

console.log(minimum(20, 20));