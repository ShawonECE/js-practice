const isHappy = (n) => {
    let num = n;
    const set = new Set();

    while(true) {
        const str = num.toString();
        num = 0;
        for (const digit of str) {
            num += (parseInt(digit))**2;
        }

        if (num === 1) {
            return true;
        } else {
            if (set.has(num)) {
                return false;
            } else {
                set.add(num);
            }
        }
    }
};