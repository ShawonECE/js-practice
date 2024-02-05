const temporary = () => {
    let count = 0;

    const plus = () => {
        count += 1;
        return count;
    };

    return plus;
};

const add = temporary();

console.log(add());
console.log(add());
console.log(add());
console.log(add());