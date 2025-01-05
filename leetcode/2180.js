const countEven = (num) => {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i < 10) {
            if (i % 2 === 0) {
                count++;
            }
        } else if (i < 100) {
            const firstDigit = Math.floor(i / 10);
            if (firstDigit % 2 === 0) {
                if (i % 2 === 0) {
                    count++;
                }
            } else {
                if (i % 2 !== 0) {
                    count++;
                }
            }
        } else if (i < 1000) {
            const firstDigit = Math.floor(i / 100);
            const secondDigit = Math.floor((i - firstDigit*100) / 10);

            if (firstDigit % 2 === 0) {
                if (secondDigit % 2 === 0) {
                    if (i % 2 === 0) {
                        count++;
                    }
                } else {
                    if (i % 2 !== 0) {
                        count++;
                    }
                }
            } else {
                if (secondDigit % 2 === 0) {
                    if (i % 2 !== 0) {
                        count++;
                    }
                } else {
                    if (i % 2 === 0) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};