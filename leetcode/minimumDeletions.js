const minimumDeletions = (s) => {
    let right_a = 0;
    let left_b = 0;
    let deletions = Infinity;
    for (const char of s) {
        if (char === 'a') {
            right_a++;
        }
    }

    for (const char of s) {
        if (char === 'a') {
            right_a--;
        }

        deletions = Math.min(deletions, right_a + left_b);

        if (char === 'b') {
            left_b++;
        }
    }

    return deletions;
};