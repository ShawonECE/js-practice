const sum = (n) => {
    if (n === 1) {
        return 1; 
    } else {
        total = n + sum(n-1);
        return total;
    }
};

console.log(sum(20));