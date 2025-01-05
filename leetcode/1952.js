const isThree = (n) => {
    const set = new Set();
    const num = Math.ceil(Math.sqrt(n));

    for (let i = 1; i <= num; i++){
        if(n % i === 0) {
            set.add(i);
            set.add(n / i);
        }
    }

    if (set.size === 3) {
        return true;
    }

    return false;
};

const n = 42;
console.log(isThree(n));