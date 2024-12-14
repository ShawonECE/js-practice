const guessNumber = (n) => {
    let i = 1, j = n;

    while (i <= j) {
        let mid = Math.floor((i + j) / 2);

        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) > 0) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
};