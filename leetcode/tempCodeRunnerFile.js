const distributeBetweenTwo = (n, limit) => {
    let ways = 0;
    for (let i = n - limit; i <= limit ; i++) {
        if (i < n - i) {
            ways += 2;
        } else if (i === n - i) {
            ways += 1;
            return ways;
        } else {
            return ways;
        }
    }
};